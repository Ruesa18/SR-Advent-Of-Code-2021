const fs = require('fs');
const { BingoCard } = require('../BingoCard');
const { Bingo } = require('../Bingo');

function partTwo() {
    const jsonData = fs.readFileSync('day_04/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    let cardCollection = [];
    for(let card of data.cards) {
        cardCollection.push(new BingoCard(card));
    }

    let bingo = new Bingo(cardCollection);
    let result = bingo.readAllNumbers(data.numbers);
    
    if(result.cardCache !== false) {
        let sum = result.cardCache.getSumOfUnmarked();

        console.log("Result: " + (result.sumCache * parseInt(result.numberCache)));
    }else{
        console.log("No winner found :(");
    }
}

module.exports.partTwo = partTwo;