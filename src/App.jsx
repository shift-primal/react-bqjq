import { shuffle } from "fast-shuffle";
import Card from "./components/Card";
import { cards } from "./utils/cards";

function App() {
	return (
		<>
			<div className="grid grid-cols-9 justify-self-start gap-4">
				{shuffle(cards).map((card) => {
					return (
						<Card
							key={card.sprite}
							card={card}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
