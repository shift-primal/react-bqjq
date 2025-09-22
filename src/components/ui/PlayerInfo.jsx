import { usePlayer } from "@contexts/PlayerContext";
import { useGame } from "../../contexts/GameContext";
import { useEffect } from "react";
import { determineWinner, getValue } from "../../lib/utils/logic";

const PlayerInfo = () => {
	const { player, setPlayer } = usePlayer();
	const { gameState } = useGame();

	useEffect(() => {
		console.log("Sjekker om spillern har vønni");

		if (gameState.gamePhase === "finished") {
			if (determineWinner(gameState) === "playerWins") {
				console.log(gameState);
				setPlayer((prev) => ({ ...prev, money: prev.money + getValue(gameState.lockedBet) * 2 }));
			}
		}
	}, [gameState.gamePhase]);

	return (
		<div className="bg-slate-800 border-4 rounded-2xl border-gray-200 flex py-4 px-8">
			<p className="text-2xl text-white">${player.money}</p>
		</div>
	);
};

export default PlayerInfo;
