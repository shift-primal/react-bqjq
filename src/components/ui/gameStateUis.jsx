import { playAudio, flipCards } from "@utils/audio";
import { useGame } from "../../contexts/GameContext";

export const PreGameUI = () => {
	const { startGame } = useGame();
	return (
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
};

export const InGameUI = () => {
	const { stand, hit } = useGame();
	return (
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
};

export const GameFinishedUI = () => {
	const { resetGame } = useGame();
	return (
		<div className="flex items-center w-full justify-center">
			<button
				className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-red-500 font-semibold tracking-wide cursor-pointer"
				onClick={() => resetGame()}
			>
				RESTART
			</button>
		</div>
	);
};
