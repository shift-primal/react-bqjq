import { useEffect, useState } from "react";
import { emptyCard } from "../lib/utils/cards";
import { useAudio } from "../contexts/AudioContext";

const Card = ({ card, flippable = false, clickable = false }) => {
	const [flipped, setFlipped] = useState(flippable ? false : true);
	// default: true = face showing
	// default (if flippable): false = not showing face

	const { playRandomCard } = useAudio();

	useEffect(() => {
		setFlipped(flippable ? false : true);
	}, [flippable]);

	function flipCard() {
		setFlipped((prev) => !prev);
		playRandomCard();
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
				src={flipped ? `/src/assets/cards/${card.sprite}` : `src/assets/cards/${emptyCard.sprite}`}
				alt="card"
				draggable={false}
			/>
		</div>
	);
};

export default Card;
