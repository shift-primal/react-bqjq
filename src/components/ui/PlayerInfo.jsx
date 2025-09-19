import { usePlayer } from "@contexts/PlayerContext";

const PlayerInfo = () => {
	const { player } = usePlayer();

	return (
		<div className="bg-slate-800 border-4 rounded-2xl border-gray-200 flex py-4 px-8">
			<p className="text-2xl text-white">${player.money}</p>
		</div>
	);
};

export default PlayerInfo;
