import { playAudio, flipCards } from "@utils/audio";
import { useEffect, useState } from "react";

const Card = ({ card, flippable = false, clickable = false }) => {
	const [flipped, setFlipped] = useState(flippable ? false : true);
	// default: true = face showing
	// default (if flippable): false = not showing face

	useEffect(() => {
		setFlipped(flippable ? false : true);
	}, [flippable]);

	function flipCard() {
		setFlipped((prev) => !prev);
		playAudio(flipCards);
	}

	return (
		<div
			id={card.sprite.slice(4, card.sprite.length - 4)}
			className="max-w-25 -ml-[68px]"
			onClick={() => {
				clickable ? flipCard() : null;
			}}
		>
			<img
				src={flipped ? `/src/assets/cards/${card.sprite}` : `src/assets/cards/cardBack_blue3.png`}
				alt="card"
				draggable={false}
			/>
		</div>
	);
};

export default Card;
