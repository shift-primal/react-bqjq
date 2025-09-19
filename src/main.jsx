import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BetProvider } from "./contexts/BetContext";
import { GameProvider } from "./contexts/GameContext";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GameProvider>
			<BetProvider>
				<App />
			</BetProvider>
		</GameProvider>
	</StrictMode>
);
