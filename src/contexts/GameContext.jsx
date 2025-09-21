import { shuffle } from "fast-shuffle";
import { createContext, useContext, useState } from "react";
import { cards, emptyCard } from "../lib/utils/cards";
import { flipCards, playAudio } from "../lib/utils/audio";
import { getValue } from "../lib/utils/logic";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [gameState, setGameState] = useState({
		gamePhase: "ready",
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
			gamePhase: "playing",
			availableCards: remainingCards,
			dealersCards: drawnCards.slice(0, Math.ceil(drawnCards.length / 2)).map((card) => card),
			playersCards: drawnCards.slice(Math.ceil(drawnCards.length / 2)).map((card) => card),
		});
	}

	function resetGame() {
		setGameState({
			gamePhase: "ready",
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
		setGameState((current) => ({ ...current, gamePhase: "standing" }));
		playAudio(flipCards);
		finishGame();
	}

	async function finishGame() {
		let updatedDealerCards = [...gameState.dealersCards];
		let remainingCards = [...gameState.availableCards];
		let dealerVal = getValue(updatedDealerCards);

		const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

		while (dealerVal < 17) {
			await wait(500);

			const drawnCard = remainingCards.shift();
			updatedDealerCards = [...updatedDealerCards, drawnCard];
			dealerVal = getValue(updatedDealerCards);

			if (dealerVal > 21) {
				let adjusted = false;
				updatedDealerCards.some((card, i) => {
					if (card.symbol === "A" && card.value === 11) {
						updatedDealerCards[i] = {
							...card,
							value: 1,
						};
						adjusted = true;
						return true;
					}
					return false;
				});

				if (adjusted) {
					dealerVal = getValue(updatedDealerCards);
				}
			}

			setGameState((current) => ({
				...current,
				dealersCards: updatedDealerCards,
				availableCards: remainingCards,
			}));

			playAudio(flipCards);
		}
		await wait(500);

		setGameState((c) => ({ ...c, gamePhase: "finished" }));
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
