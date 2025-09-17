import Chip from "../Chip";
import { chips } from "../../utils/chips";
import { useState } from "react";

const BetContainer = () => {
	const [currentBet, setCurrentBet] = useState([]);

	return (
		<div className="bg-slate-800 border-4 p-8 rounded-2xl border-gray-200 flex flex-col">
			<div
				id="your-bet"
				className="flex gap-6"
			>
				{currentBet.length > 0 &&
					currentBet.map((chip) => {
						return (
							<Chip
								key={chip.sprite}
								chip={chip}
							/>
						);
					})}
			</div>
			<div
				id="select-chips"
				className="flex gap-6"
			>
				{chips.map((chip) => {
					return (
						<Chip
							key={chip.sprite}
							chip={chip}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default BetContainer;
