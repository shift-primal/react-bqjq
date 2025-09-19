import { chips } from "@utils/chips";

import Chip from "../Chip";
import Separator from "../Separator";
import { usePlayer } from "@contexts/PlayerContext";
import { Undo2 } from "lucide-react";

const BetContainer = () => {
	const { setPlayer, currentBet, setCurrentBet } = usePlayer();

	const resetBet = () => {
		setPlayer((prev) => ({
			...prev,
			money: prev.money + currentBet.map((chip) => chip.value).reduce((acc, cur) => acc + cur),
		}));
		setCurrentBet([]);
	};

	return (
		<div className="bg-slate-800 border-4 py-6 gap-y-12 rounded-2xl border-gray-200 w-200 h-full">
			<div
				id="your-bet"
				className="relative h-[68px] flex justify-center"
			>
				{currentBet.length > 0 &&
					currentBet.map((chip, i) => {
						return (
							<Chip
								key={chip.sprite + i}
								chip={chip}
								clickable={false}
								currentBet={currentBet}
								setCurrentBet={setCurrentBet}
								offset={i}
							/>
						);
					})}
				<button
					onClick={() => resetBet()}
					className="absolute self-center right-10 text-white cursor-pointer"
				>
					<Undo2 size={28} />
				</button>
			</div>
			<p className="text-white text-2xl text-center my-4">
				{currentBet.length > 0 ? currentBet.map((chip) => chip.value).reduce((acc, cur) => acc + cur) + "$" : "0$"}
			</p>
			<Separator space={4} />
			<div
				id="select-chips"
				className="flex gap-6 row-span-2 justify-center"
			>
				{chips.map((chip) => {
					return (
						<Chip
							key={chip.sprite}
							chip={chip}
							clickable={true}
							setCurrentBet={setCurrentBet}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BetContainer;
