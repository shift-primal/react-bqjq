import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PlayerProvider } from "./contexts/PlayerContext";
import { GameProvider } from "./contexts/GameContext";
import { AudioProvider } from "./contexts/AudioContext";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<GameProvider>
			<AudioProvider>
				<PlayerProvider>
					<App />
				</PlayerProvider>
			</AudioProvider>
		</GameProvider>
	</StrictMode>
);
