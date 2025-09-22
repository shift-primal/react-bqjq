import { createContext, useContext } from "react";
import cardAudio from "@audio/cards_audio_sprite.ogg";
import chipsAudio from "@audio/chips_audio_sprite.ogg";
import useSound from "use-sound";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
	const [playCard] = useSound(cardAudio, {
		sprite: {
			first: [0, 1000],
			second: [1000, 1000],
			third: [2000, 1000],
		},
		volume: 0.5,
	});

	const [playChips] = useSound(chipsAudio, {
		sprite: {
			first: [0, 500],
			second: [1000, 500],
		},
		volume: 0.5,
	});

	const playRandomSound = (sounds) => {
		const randIdx = Math.floor(Math.random() * sounds.length);
		sounds[randIdx]();
	};

	const sounds = {
		cards: [() => playCard({ id: "first" }), () => playCard({ id: "second" }), () => playCard({ id: "third" })],
		chips: [() => playChips({ id: "first" }), () => playChips({ id: "second" })],
	};

	const playRandomCard = () => playRandomSound(sounds.cards);
	const playRandomChips = () => playRandomSound(sounds.chips);

	return (
		<AudioContext.Provider value={{ playCard, playRandomCard, playChips, playRandomChips, playRandomSound, sounds }}>
			{children}
		</AudioContext.Provider>
	);
};

export const useAudio = () => {
	const context = useContext(AudioContext);

	if (!context) {
		throw new Error("useAudio must be used within a AudioProvider");
	}

	return context;
};
