const suits = {
	clubs: { color: "black", icon: "♣" },
	spades: { color: "black", icon: "♠" },
	diamonds: { color: "red", icon: "♦" },
	hearts: { color: "red", icon: "♥" },
};

export const emptyCard = { value: 0, suit: "N/A", symbol: 0, sprite: "cardBack_blue3.png" };

export const cards = [
	// Clubs
	{ value: 11, suit: suits.clubs, symbol: "A", sprite: "cardClubsA.png" },
	{ value: 2, suit: suits.clubs, symbol: "2", sprite: "cardClubs2.png" },
	{ value: 3, suit: suits.clubs, symbol: "3", sprite: "cardClubs3.png" },
	{ value: 4, suit: suits.clubs, symbol: "4", sprite: "cardClubs4.png" },
	{ value: 5, suit: suits.clubs, symbol: "5", sprite: "cardClubs5.png" },
	{ value: 6, suit: suits.clubs, symbol: "6", sprite: "cardClubs6.png" },
	{ value: 7, suit: suits.clubs, symbol: "7", sprite: "cardClubs7.png" },
	{ value: 8, suit: suits.clubs, symbol: "8", sprite: "cardClubs8.png" },
	{ value: 9, suit: suits.clubs, symbol: "9", sprite: "cardClubs9.png" },
	{ value: 10, suit: suits.clubs, symbol: "10", sprite: "cardClubs10.png" },
	{ value: 10, suit: suits.clubs, symbol: "J", sprite: "cardClubsJ.png" },
	{ value: 10, suit: suits.clubs, symbol: "Q", sprite: "cardClubsQ.png" },
	{ value: 10, suit: suits.clubs, symbol: "K", sprite: "cardClubsK.png" },

	// Spades
	{ value: 11, suit: suits.spades, symbol: "A", sprite: "cardSpadesA.png" },
	{ value: 2, suit: suits.spades, symbol: "2", sprite: "cardSpades2.png" },
	{ value: 3, suit: suits.spades, symbol: "3", sprite: "cardSpades3.png" },
	{ value: 4, suit: suits.spades, symbol: "4", sprite: "cardSpades4.png" },
	{ value: 5, suit: suits.spades, symbol: "5", sprite: "cardSpades5.png" },
	{ value: 6, suit: suits.spades, symbol: "6", sprite: "cardSpades6.png" },
	{ value: 7, suit: suits.spades, symbol: "7", sprite: "cardSpades7.png" },
	{ value: 8, suit: suits.spades, symbol: "8", sprite: "cardSpades8.png" },
	{ value: 9, suit: suits.spades, symbol: "9", sprite: "cardSpades9.png" },
	{ value: 10, suit: suits.spades, symbol: "10", sprite: "cardSpades10.png" },
	{ value: 10, suit: suits.spades, symbol: "J", sprite: "cardSpadesJ.png" },
	{ value: 10, suit: suits.spades, symbol: "Q", sprite: "cardSpadesQ.png" },
	{ value: 10, suit: suits.spades, symbol: "K", sprite: "cardSpadesK.png" },

	// Diamonds
	{ value: 11, suit: suits.diamonds, symbol: "A", sprite: "cardDiamondsA.png" },
	{ value: 2, suit: suits.diamonds, symbol: "2", sprite: "cardDiamonds2.png" },
	{ value: 3, suit: suits.diamonds, symbol: "3", sprite: "cardDiamonds3.png" },
	{ value: 4, suit: suits.diamonds, symbol: "4", sprite: "cardDiamonds4.png" },
	{ value: 5, suit: suits.diamonds, symbol: "5", sprite: "cardDiamonds5.png" },
	{ value: 6, suit: suits.diamonds, symbol: "6", sprite: "cardDiamonds6.png" },
	{ value: 7, suit: suits.diamonds, symbol: "7", sprite: "cardDiamonds7.png" },
	{ value: 8, suit: suits.diamonds, symbol: "8", sprite: "cardDiamonds8.png" },
	{ value: 9, suit: suits.diamonds, symbol: "9", sprite: "cardDiamonds9.png" },
	{ value: 10, suit: suits.diamonds, symbol: "10", sprite: "cardDiamonds10.png" },
	{ value: 10, suit: suits.diamonds, symbol: "J", sprite: "cardDiamondsJ.png" },
	{ value: 10, suit: suits.diamonds, symbol: "Q", sprite: "cardDiamondsQ.png" },
	{ value: 10, suit: suits.diamonds, symbol: "K", sprite: "cardDiamondsK.png" },

	// Hearts
	{ value: 11, suit: suits.hearts, symbol: "A", sprite: "cardHeartsA.png" },
	{ value: 2, suit: suits.hearts, symbol: "2", sprite: "cardHearts2.png" },
	{ value: 3, suit: suits.hearts, symbol: "3", sprite: "cardHearts3.png" },
	{ value: 4, suit: suits.hearts, symbol: "4", sprite: "cardHearts4.png" },
	{ value: 5, suit: suits.hearts, symbol: "5", sprite: "cardHearts5.png" },
	{ value: 6, suit: suits.hearts, symbol: "6", sprite: "cardHearts6.png" },
	{ value: 7, suit: suits.hearts, symbol: "7", sprite: "cardHearts7.png" },
	{ value: 8, suit: suits.hearts, symbol: "8", sprite: "cardHearts8.png" },
	{ value: 9, suit: suits.hearts, symbol: "9", sprite: "cardHearts9.png" },
	{ value: 10, suit: suits.hearts, symbol: "10", sprite: "cardHearts10.png" },
	{ value: 10, suit: suits.hearts, symbol: "J", sprite: "cardHeartsJ.png" },
	{ value: 10, suit: suits.hearts, symbol: "Q", sprite: "cardHeartsQ.png" },
	{ value: 10, suit: suits.hearts, symbol: "K", sprite: "cardHeartsK.png" },
];
