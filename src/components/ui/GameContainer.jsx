import Card from "@components/Card";
import { useEffect } from "react";
import { PreGameUI, InGameUI, GameFinishedUI } from "./GameUI";
import { getValue } from "@utils/logic";
import { useGame } from "@contexts/GameContext";
import Results from "./Results";

const GameContainer = () => {
	const { gameState, setGameState } = useGame();

	// console.log("Available cards:", gameState.availableCards);
	// console.log("Dealers cards:", gameState.dealersCards);
	// console.log("Players cards:", gameState.playersCards);

	useEffect(() => {
		if (getValue(gameState.playersCards) > 21) {
			setGameState((currentState) => ({
				...currentState,
				gamePhase: "finished",
			}));
		}
	}, [gameState.playersCards]);

	const dealerCards = gameState.dealersCards.map((card, i) => (
		<Card
			key={`dealer-${i}`}
			card={card}
			flippable={gameState.gamePhase === "playing" && i > 0}
		/>
	));

	return (
		<div className="bg-slate-800 border-4 py-6 gap-y-12 rounded-2xl border-gray-200 w-200  flex flex-col items-center relative">
			{gameState.gamePhase === "finished" && <Results />}
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
						{gameState.gamePhase === "playing" ? gameState.dealersCards[0].value : getValue(gameState.dealersCards)}
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
			{gameState.gamePhase === "ready" ? (
				<PreGameUI />
			) : gameState.gamePhase === "playing" ? (
				<InGameUI />
			) : (
				<GameFinishedUI />
			)}
		</div>
	);
};

export default GameContainer;
