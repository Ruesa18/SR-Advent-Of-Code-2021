class Bingo {
    constructor(cards) {
        this.cards = cards;
    }

    readNumbers(numbers) {
        for(let number of numbers) {
            for(let card of this.cards) {
                card.findNumber(number);

                if(card.wins()) {
                    return number;
                }
            }
        }
        return false;
    }

    getWinner() {
        for(let card of this.cards) {
            if(card.wins()) {
                return card;
            }
        }
        return false;
    }
}

module.exports.Bingo = Bingo;