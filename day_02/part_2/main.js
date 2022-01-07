const fs = require('fs');

function partTwo() {
    let depth = 0;
    let forwardChanges = [];
    let aim = 0;

    const jsonData = fs.readFileSync('day_02/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    for(let value of data) {
        let dataSet = value.split(" ");
        
        if(dataSet[0] == "forward") {
            forwardChanges.push(parseInt(dataSet[1]));
            depth += parseInt(aim * dataSet[1]);
        }
        if(dataSet[0] == "up") {
            aim -= parseInt(dataSet[1]);
        }
        if(dataSet[0] == "down") {
            aim += parseInt(dataSet[1]);
        }
    }

    let forwardChangeSum = forwardChanges.reduce((partialSum, value) => partialSum + value, 0);

    console.log("Depth: " + depth);
    console.log("Forward: " + forwardChangeSum);

    let product =  depth * forwardChangeSum;
    console.log("\nResult: ", product);
}

module.exports.partTwo = partTwo;