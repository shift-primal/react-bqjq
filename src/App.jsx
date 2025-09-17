import BetContainer from "@ui/BetContainer";
import GameContainer from "@ui/GameContainer";

function App() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-evenly">
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
		</main>
	);
}

export default App;
