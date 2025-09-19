import { shuffle } from "fast-shuffle";
import { createContext, useContext, useState } from "react";
import { cards, emptyCard } from "../lib/utils/cards";
import { flipCards, playAudio } from "../lib/utils/audio";
import { getValue } from "../lib/utils/logic";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [gameState, setGameState] = useState({
		roundInProgress: false,
		playerStands: false,
		playerBusted: false,
		dealerBusted: false,
		playerWon: false,
		dealerWon: false,
		tie: false,
		gameFinished: false,
		availableCards: shuffle([...cards]),
		dealersCards: Array(2).fill(emptyCard),
		playersCards: Array(2).fill(emptyCard),
	});

	function drawCards(cardsToDraw) {
		const drawnCards = [];

		for (let i = 0; i < cardsToDraw; i++) {
			drawnCards.push(gameState.availableCards[i]);
		}

		return { drawnCards, remainingCards: gameState.availableCards.slice(cardsToDraw) };
	}

	function startGame() {
		const { drawnCards, remainingCards } = drawCards(4);
		setGameState({
			roundInProgress: true,
			availableCards: remainingCards,
			dealersCards: drawnCards.slice(0, Math.ceil(drawnCards.length / 2)).map((card) => card),
			playersCards: drawnCards.slice(Math.ceil(drawnCards.length / 2)).map((card) => card),
		});
	}

	function resetGame() {
		setGameState({
			roundInProgress: false,
			availableCards: shuffle([...cards]),
			dealersCards: Array(2).fill(emptyCard),
			playersCards: Array(2).fill(emptyCard),
		});
	}

	function hit() {
		const { drawnCards, remainingCards } = drawCards(1);

		setGameState({
			...gameState,
			playersCards: [...gameState.playersCards, ...drawnCards],
			availableCards: remainingCards,
		});

		playAudio(flipCards);
	}

	async function stand() {
		setGameState((current) => ({ ...current, playerStands: true }));

		playAudio(flipCards);

		finishGame();
	}

	async function finishGame() {
		const playerVal = getValue(gameState.playersCards);

		let updatedDealerCards = [...gameState.dealersCards];
		let remainingCards = [...gameState.availableCards];
		let dealerVal = getValue(updatedDealerCards);

		const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		while (dealerVal < 17) {
			await wait(500);

			const drawnCard = remainingCards.shift();
			updatedDealerCards = [...updatedDealerCards, drawnCard];
			dealerVal = getValue(updatedDealerCards);

			setGameState((current) => ({
				...current,
				dealersCards: updatedDealerCards,
				availableCards: remainingCards,
			}));

			playAudio(flipCards);
		}

		// Round results
		if (dealerVal > 21) {
			setGameState((c) => ({ ...c, roundInProgress: false, dealerBusted: true }));
		} else if (dealerVal > playerVal) {
			setGameState((c) => ({ ...c, roundInProgress: false, dealerWon: true }));
		} else if (dealerVal === playerVal) {
			setGameState((c) => ({ ...c, roundInProgress: false, tie: true }));
		} else {
			setGameState((c) => ({ ...c, roundInProgress: false, playerWon: true }));
		}
	}

	return (
		<GameContext.Provider value={{ gameState, setGameState, startGame, resetGame, hit, stand }}>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = () => {
	const context = useContext(GameContext);

	if (!context) {
		throw new Error("useGame must be used within a BetProvider");
	}

	return context;
};
