import { useGame } from "../../contexts/GameContext";
import { getValue } from "../../lib/utils/logic";

const Results = () => {
	const { gameState } = useGame();

	function determineWinner() {
		if (getValue(gameState.playersCards) > 21) {
			return "playerBust";
		} else if (getValue(gameState.dealersCards) > 21) {
			return "playerWins";
		} else if (getValue(gameState.dealersCards) > getValue(gameState.playersCards)) {
			return "dealerWins";
		} else if (getValue(gameState.dealersCards) === getValue(gameState.playersCards)) {
			return "tie";
		} else {
			return "playerWins";
		}
	}

	const resultClasses = () => {
		const color = results[determineWinner()].color;
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
			<p className={resultClasses()}>{results[determineWinner()].msg}</p>
		</div>
	);
};

export default Results;
