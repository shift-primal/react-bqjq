import { createContext, useContext, useState } from "react";

export const BetContext = createContext();

export const BetProvider = ({ children }) => {
	const [currentBet, setCurrentBet] = useState([]);

	return <BetContext.Provider value={{ currentBet, setCurrentBet }}>{children}</BetContext.Provider>;
};

export const useBet = () => {
	const context = useContext(BetContext);

	if (!context) {
		throw new Error("useBet must be used within a BetProvider");
	}

	return context;
};
