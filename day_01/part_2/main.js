const fs = require('fs');
const { MeasurementWindowCollection } = require('./MeasurementWindowCollection');

function partTwo() {
    try {
        const jsonData = fs.readFileSync('day_01/input.json', 'utf8');
        const data = JSON.parse(jsonData);
    
        const measurementWindows = getMeasurementWindows(data);
        
        measurementWindows.cleanup();
        console.log(measurementWindows.data);

        const count = findAmountOfIncreases(measurementWindows.getSonarDataSums());
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
    
    return count;
}

function getMeasurementWindows(data) {
    const measurementWindowCollection = new MeasurementWindowCollection();
    for(let i = 0; i < data.length; i++) {
        measurementWindowCollection.addData(data[i]);
    }
    return measurementWindowCollection;
}

module.exports.partTwo = partTwo;