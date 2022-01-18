const fs = require('fs');
const { BingoCard } = require('../BingoCard');
const { Bingo } = require('../Bingo');

function partOne() {
    const jsonData = fs.readFileSync('day_04/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    let cardCollection = [];
    for(let card of data.cards) {
        cardCollection.push(new BingoCard(card));
    }

    let bingo = new Bingo(cardCollection);
    let lastNumber = bingo.readNumbers(data.numbers);

    if(lastNumber !== false) {
        let winner = bingo.getWinner();
        let sum = winner.getSumOfUnmarked();

        console.log("Result: " + (sum * lastNumber));
    }else{
        console.log("No winner found :(");
    }
}

module.exports.partOne = partOne;