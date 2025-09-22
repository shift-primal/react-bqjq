import { useGame } from "../../contexts/GameContext";
import { determineWinner } from "../../lib/utils/logic";

const Results = () => {
	const { gameState } = useGame();

	const resultClasses = () => {
		const color = results[determineWinner(gameState)].color;
		return `text-7xl font-bold uppercase ${color}`;
	};

	const results = {
		dealerWins: { msg: "Dealer won", color: "text-red-600" },
		playerBust: { msg: "You bust", color: "text-red-600" },
		playerWins: { msg: "You won!", color: "text-green-400" },
		tie: { msg: "It's a tie", color: "text-gray-400" },
	};

	return (
		<div
			id="results"
			className="absolute top-52 py-4 px-8 bg-black/80 rounded-lg"
		>
			<p className={resultClasses()}>{results[determineWinner(gameState)].msg}</p>
		</div>
	);
};

export default Results;
