export function getValue(arr) {
	const init = 0;
	return arr.map((x) => x.value).reduce((acc, cur) => acc + cur, init);
}

export function determineWinner(gameState) {
	if (getValue(gameState.playersCards) > 21) {
		return "playerBust";
	} else if (getValue(gameState.dealersCards) > 21) {
		return "playerWins";
	} else if (getValue(gameState.dealersCards) > getValue(gameState.playersCards)) {
		return "dealerWins";
	} else if (getValue(gameState.dealersCards) === getValue(gameState.playersCards)) {
		return "tie";
	} else {
		return "playerWins";
	}
}
