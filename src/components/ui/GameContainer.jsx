import Card from "@components/Card";
import { useEffect } from "react";

import { PreGameUI, InGameUI, GameFinishedUI } from "./gameStateUis";
import { getValue } from "../../lib/utils/logic";
import { useGame } from "../../contexts/GameContext";

const GameContainer = () => {
	const { gameState, setGameState } = useGame();

	// console.log("Available cards:", gameState.availableCards);
	// console.log("Dealers cards:", gameState.dealersCards);
	// console.log("Players cards:", gameState.playersCards);

	useEffect(() => {
		if (getValue(gameState.playersCards) > 21) {
			setGameState((currentState) => ({
				...currentState,
				roundInProgress: false,
				gameFinished: true,
				playerBusted: true,
			}));
		}
	}, [gameState.playersCards]);

	const dealerCards = gameState.dealersCards.map((card, i) => (
		<Card
			key={`dealer-${i}`}
			card={card}
			flippable={!gameState.playerStands && i > 0}
			// Comment out later
			clickable={true}
		/>
	));

	return (
		<div className="bg-slate-800 border-4 py-6 gap-y-12 rounded-2xl border-gray-200 w-200  flex flex-col items-center relative">
			{gameState.tie && (
				<p className="text-7xl text-gray-300 absolute inset-0 place-self-center font-bold -translate-y-12 bg-black/80 p-4 rounded-xl">
					ITS A TIE
				</p>
			)}
			{gameState.playerBusted && (
				<p className="text-7xl text-red-600 absolute inset-0 place-self-center font-bold -translate-y-12 bg-black/80 p-4 rounded-xl">
					YOU BUST
				</p>
			)}

			{gameState.dealerWon && (
				<p className="text-7xl text-red-600 absolute inset-0 place-self-center font-bold -translate-y-12 bg-black/80 p-4 rounded-xl">
					DEALER WINS
				</p>
			)}
			{gameState.playerWon && (
				<p className="text-7xl text-green-500 absolute inset-0 place-self-center font-bold -translate-y-12 bg-black/80 p-4 rounded-xl">
					YOU WIN
				</p>
			)}
			{gameState.dealerBusted && (
				<p className="text-7xl text-green-500 absolute inset-0 place-self-center font-bold -translate-y-12 bg-black/80 p-4 rounded-xl">
					YOU WIN
				</p>
			)}
			<div className="flex flex-col justify-center items-center gap-y-4 w-full px-16">
				<div
					id="dealers-cards"
					className="flex flex-col items-center gap-y-4 bg-green-800 p-4 w-full rounded-xl border-4 border-white"
				>
					<div
						id="dealer-card-elements"
						className="flex gap-x-6 ml-[68px] mt-2"
					>
						{dealerCards}
					</div>
					<p className="text-center text-lg text-white">
						Dealers value:
						{!gameState.playerStands ? gameState.dealersCards[0].value : getValue(gameState.dealersCards)}
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
					<p className="text-center text-lg text-white">Your value: {getValue(gameState.playersCards)}</p>
				</div>
			</div>
			{gameState.gameFinished ? (
				<GameFinishedUI />
			) : !gameState.gameFinished && !gameState.roundInProgress ? (
				<PreGameUI />
			) : (
				<InGameUI />
			)}
		</div>
	);
};

export default GameContainer;
