const fs = require('fs');

function partOne() {
    try {
        const jsonData = fs.readFileSync('day_01/input.json', 'utf8');
        const data = JSON.parse(jsonData);
    
        const count = findAmountOfIncreases(data);
        console.log("Result: " + count);
    } catch (err) {
        console.error(err);
    }
}

function findAmountOfIncreases(sonarSweeps) {
    const INCREASE = "increased";
    const DECREASE = "decreased";
    const NO_CHANGE = "has not changed";
    
    let measurementDifferences = [null];
    for(let i = 1; i < sonarSweeps.length; i++) {
        measurementDifferences.push(sonarSweeps[i] > sonarSweeps[i - 1] ? INCREASE : sonarSweeps[i] == sonarSweeps[i - 1] ? NO_CHANGE : DECREASE);
    }
    
    const count = measurementDifferences.filter(value => value == INCREASE).length;
    
    console.log(measurementDifferences);

    return count;
}


module.exports.partOne = partOne;