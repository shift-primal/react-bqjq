<button
	className="text-white border-2 rounded-md text-2xl px-3 py-1 bg-red-500 font-semibold tracking-wide cursor-pointer"
	onClick={() => resetGame()}
>
	RESET
</button>;

<div className="flex-1">
	<p className="text-center text-lg text-white">Cards left in deck: {gameState.availableCards.length}</p>
</div>;

function startGame() {
	const { drawnCards, remainingCards } = drawCards(4);
	updateGameState(
		remainingCards,
		drawnCards.slice(0, Math.ceil(drawnCards.length / 2)).map((card) => card),
		drawnCards.slice(Math.ceil(drawnCards.length / 2)).map((card) => card)
	);
}
