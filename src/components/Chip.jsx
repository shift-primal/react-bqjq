import { playAudio, chipsCollide } from "@utils/audio";

const Chip = ({ chip }) => {
	return (
		<div
			id={chip.sprite.slice(4, chip.sprite.length - 11)}
			className="relative"
			onClick={() => {
				playAudio(chipsCollide);
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
