export const flipCards = [
	new Audio("/src/assets/audio/cardSlide1.ogg"),
	new Audio("/src/assets/audio/cardSlide2.ogg"),
	new Audio("/src/assets/audio/cardSlide3.ogg"),
];

export const chipsCollide = [
	new Audio("/src/assets/audio/chipsCollide1.ogg"),
	new Audio("/src/assets/audio/chipsCollide2.ogg"),
	new Audio("/src/assets/audio/chipsCollide3.ogg"),
];

export const playAudio = (sounds) => {
	const randIdx = Math.floor(Math.random() * sounds.length);
	sounds[randIdx].play();
};
