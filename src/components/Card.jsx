import { useState } from "react";

const Card = ({ card }) => {
	const [flipped, setFlipped] = useState(false);
	// default: false = not showing face
	// flipped: true = face showing

	const flipSounds = [
		new Audio("/src/assets/audio/cardSlide1.ogg"),
		new Audio("/src/assets/audio/cardSlide2.ogg"),
		new Audio("/src/assets/audio/cardSlide3.ogg"),
	];

	const playAudio = (sounds) => {
		const randIdx = Math.floor(Math.random() * sounds.length);
		sounds[randIdx].play();
	};

	return (
		<div
			id={card.sprite.slice(4, card.sprite.length - 4)}
			className="max-w-25"
			onClick={() => {
				setFlipped((prev) => !prev);
				playAudio(flipSounds);
			}}
		>
			<img
				src={flipped ? `/src/assets/cards/${card.sprite}` : `src/assets/cards/cardBack_blue3.png`}
				draggable={false}
			/>
		</div>
	);
};

export default Card;
