import { playAudio, chipsCollide } from "@utils/audio";
import { usePlayer } from "../contexts/PlayerContext";

const Chip = ({ chip, currentBet, setCurrentBet, clickable, offset }) => {
	const { player, setPlayer } = usePlayer();
	return (
		<div
			id={chip.sprite.slice(4, chip.sprite.length - 11)}
			className={`absolute ${clickable ? "cursor-pointer relative" : ""}`}
			style={!clickable ? { transform: `translateX(${offset * 10 + currentBet.length * -5}px)` } : {}}
			onClick={() => {
				if (clickable) {
					setCurrentBet((prev) => [...prev, chip]);
					setPlayer((prev) => ({ ...prev, money: prev.money - chip.value }));
					playAudio(chipsCollide);
				}
			}}
		>
			<img
				src={`/src/assets/chips/${chip.sprite}`}
				draggable={false}
			/>
			<p
				className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-bold pointer-events-none"
				style={{ color: `${chip.textColor}` }}
			>
				{chip.value}
			</p>
		</div>
	);
};

export default Chip;
