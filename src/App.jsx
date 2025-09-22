import BetContainer from "@ui/BetContainer";
import GameContainer from "@ui/GameContainer";

import PlayerInfo from "./components/ui/PlayerInfo";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<main className="min-h-screen flex items-center justify-evenly">
			<Toaster position="bottom-center" />
			<div className="flex-1"></div>
			<div
				id="app-container"
				className="flex flex-col gap-16 items-center justify-center flex-1"
			>
				<div
					id="game-container"
					className="flex max-w-7xl"
				>
					<GameContainer />
				</div>
				<div
					id="bet-container"
					className="flex max-w-4xl"
				>
					<BetContainer />
				</div>
			</div>
			<div
				id="player-container"
				className="flex max-w-4xl flex-1 justify-center"
			>
				<PlayerInfo />
			</div>
		</main>
	);
}

export default App;
