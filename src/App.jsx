import BetContainer from "@ui/BetContainer";
import GameContainer from "@ui/GameContainer";
import Separator from "./components/Separator";

function App() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-evenly">
			<div
				id="app-container"
				className="flex flex-col gap-16 items-center justify-center"
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
		</main>
	);
}

export default App;
