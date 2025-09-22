import { createContext, useContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
	const [player, setPlayer] = useState({
		name: "Kasper Haugestøl",
		money: 1000,
	});

	return <PlayerContext.Provider value={{ player, setPlayer }}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
	const context = useContext(PlayerContext);

	if (!context) {
		throw new Error("usePlayer must be used within a PlayerProvider");
	}

	return context;
};
