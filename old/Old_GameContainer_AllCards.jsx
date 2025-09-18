import Card from "@components/Card";
import { cards } from "@utils/cards";

const GameContainer = () => {
	return (
		<div className="grid grid-cols-13 gap-4 m-auto bg-slate-800 border-4 border-gray-200 p-16 rounded-4xl">
			{cards.map((card) => {
				return (
					<Card
						key={card.sprite}
						card={card}
					/>
				);
			})}
		</div>
	);
};

export default GameContainer;
