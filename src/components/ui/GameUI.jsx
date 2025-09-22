import { useGame } from "@contexts/GameContext";
import { useAudio } from "../../contexts/AudioContext";
import { getValue } from "../../lib/utils/logic";
import toast from "react-hot-toast";
import Chip from "../Chip";

const YourBet = () => {
	const { gameState } = useGame();
	return (
		<>
			<div
				id="your-bet"
				className="relative h-[68px] flex justify-center"
			>
				{gameState.lockedBet.length > 0 &&
					gameState.lockedBet.map((chip, i) => {
						return (
							<Chip
								key={chip.sprite + i}
								chip={chip}
								clickable={false}
								currentBet={gameState.lockedBet}
								offset={i}
							/>
						);
					})}
			</div>
			<p className="text-white text-2xl text-center">{getValue(gameState.lockedBet) + "$"}</p>
		</>
	);
};

export const PreGameUI = () => {
	const { currentBet, startGame } = useGame();

	const { playRandomCard } = useAudio();

	return (
		<div className="flex items-center w-full justify-center">
			<button
				className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-green-500 font-semibold tracking-wide cursor-pointer"
				onClick={() => {
					if (getValue(currentBet) > 0) {
						startGame();
						playRandomCard();
					} else {
						toast.error("You have to place a bet");
					}
				}}
			>
				START
			</button>
		</div>
	);
};

export const InGameUI = () => {
	const { gameState } = useGame();
	const { stand, hit, finishGame } = useGame();
	const { playRandomCard } = useAudio();

	return (
		<div className="flex items-center w-full relative">
			<div className="flex-1 flex flex-col gap-y-8">
				<div
					id="buttons"
					className="flex gap-x-6 justify-center"
				>
					<button
						className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-gray-500 font-semibold tracking-wide cursor-pointer"
						onClick={() => {
							stand();
							playRandomCard();
							finishGame(playRandomCard);
						}}
					>
						STAND
					</button>
					<button
						className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-green-500 font-semibold tracking-wide cursor-pointer"
						onClick={() => {
							hit();
							playRandomCard();
						}}
					>
						HIT
					</button>
				</div>
				{<YourBet />}
			</div>
		</div>
	);
};

export const GameFinishedUI = () => {
	const { resetGame } = useGame();
	return (
		<div className="flex items-center w-full relative">
			<div className="flex-1 flex flex-col gap-y-8">
				<div
					id="buttons"
					className="flex gap-x-6 justify-center"
				>
					<button
						className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-red-500 font-semibold tracking-wide cursor-pointer"
						onClick={() => resetGame()}
					>
						RESTART
					</button>
				</div>
				<YourBet />
			</div>
		</div>
	);
};
