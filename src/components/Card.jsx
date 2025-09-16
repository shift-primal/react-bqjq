import { useState } from "react";

const Card = ({ card }) => {
	const [flipped, setFlipped] = useState(false);
	// default: false = not showing face
	// flipped: true = face showing

	return (
		<div
			id={card.sprite.slice(4, card.sprite.length - 4)}
			className="max-w-20"
			onClick={() => setFlipped((prev) => !prev)}
		>
			<img src={flipped ? `/src/assets/cards/${card.sprite}` : `src/assets/cards/cardBack_blue3.png`} />
		</div>
	);
};

export default Card;
