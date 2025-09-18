import Card from "@components/Card";
import { cards, emptyCard } from "@utils/cards";
import { shuffle } from "fast-shuffle";
import { useState } from "react";
import { playAudio, flipCards } from "@utils/audio";

const GameContainer = () => {
	const [gameState, setGameState] = useState({
		roundInProgress: false,
		availableCards: shuffle([...cards]),
		dealersCards: Array(2).fill(emptyCard),
		playersCards: Array(2).fill(emptyCard),
	});

	// console.log("Available cards:", gameState.availableCards);
	// console.log("Dealers cards:", gameState.dealersCards);
	// console.log("Players cards:", gameState.playersCards);

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

	function stand() {
		setGameState({
			...gameState,
			roundInProgress: false,
		});

		playAudio(flipCards);
	}

	const dealerCardsHidden = gameState.dealersCards.map((card, i) => (
		<Card
			key={`dealer-${i}`}
			card={card}
			flippable={i > 0 ? true : false}
			// Comment out later
			clickable={true}
		/>
	));

	const dealerCardsShown = gameState.dealersCards.map((card, i) => (
		<Card
			key={`dealer-${i}`}
			card={card}
			flippable={false}
			// Comment out later
			clickable={true}
		/>
	));

	const preGameUi = (
		<div className="flex items-center w-full justify-center">
			<button
				className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-green-500 font-semibold tracking-wide cursor-pointer"
				onClick={() => {
					startGame();
					playAudio(flipCards);
				}}
			>
				START
			</button>
		</div>
	);

	const inGameUi = (
		<div className="flex items-center w-full relative">
			<div className="flex-1 flex justify-center">
				<div
					id="buttons"
					className="flex gap-x-6"
				>
					<button
						className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-gray-500 font-semibold tracking-wide cursor-pointer"
						onClick={() => stand()}
					>
						STAND
					</button>
					<button
						className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-green-500 font-semibold tracking-wide cursor-pointer"
						onClick={() => hit()}
					>
						HIT
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className="bg-slate-800 border-4 py-6 gap-y-12 rounded-2xl border-gray-200 w-200  flex flex-col items-center">
			<button
				className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-red-500 font-semibold tracking-wide cursor-pointer absolute top-10"
				onClick={() => resetGame()}
			>
				RESET
			</button>
			<div className="flex flex-col justify-center items-center gap-y-4 w-full px-16">
				<div
					id="dealers-cards"
					className="flex flex-col items-center gap-y-4 bg-green-800 p-4 w-full rounded-xl border-4 border-white"
				>
					<div
						id="dealer-card-elements"
						className="flex gap-x-6 ml-[68px] mt-2"
					>
						{gameState.roundInProgress ? dealerCardsHidden : dealerCardsShown}
					</div>
					<p className="text-center text-lg text-white">
						Dealers value:
						{gameState.roundInProgress
							? gameState.dealersCards[0].value
							: gameState.dealersCards.map((card) => card.value).reduce((acc, cur) => acc + cur)}
					</p>
				</div>

				<div
					id="your-cards"
					className="flex flex-col items-center gap-y-4 bg-green-800 p-4 w-full rounded-xl border-4 border-white"
				>
					<div
						id="player-card-elements"
						className="flex gap-x-6 ml-[68px] mt-2"
					>
						{gameState.playersCards.map((card, i) => (
							<Card
								key={`player-${i}`}
								card={card}
							/>
						))}
					</div>
					<p className="text-center text-lg text-white">
						Your value: {gameState.playersCards.map((card) => card.value).reduce((acc, cur) => acc + cur)}
					</p>
				</div>
			</div>
			{!gameState.roundInProgress ? preGameUi : inGameUi}
		</div>
	);
};

export default GameContainer;
