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

    readAllNumbers(numbers) {
        let cardCache = false;
        let numberCache = -1;
        let sumCache = false;

        let foundIndexes = [];

        for(let number of numbers) {
            for(let i = 0; i < this.cards.length; i++) {
                if(!foundIndexes.includes(i)) {
                    this.cards[i].findNumber(number);

                    if(this.cards[i].wins()) {
                        cardCache = this.cards[i];
                        numberCache = number;
                        sumCache = this.cards[i].getSumOfUnmarked();

                        foundIndexes.push(i);
                    }
                }
            }
        }
        return {cardCache, numberCache, sumCache};
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