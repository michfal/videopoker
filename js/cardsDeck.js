class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        suits.map((suit) => ranks.map((rank, index) => this.cards.push(new Card(suit, rank, values[index]))))
    }
}
