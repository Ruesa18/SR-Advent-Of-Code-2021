const fs = require('fs');

function partOne() {
    let depthChanges = [];
    let forwardChanges = [];

    const jsonData = fs.readFileSync('day_2/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    for(let value of data) {
        let dataSet = value.split(" ");
        
        if(dataSet[0] == "forward") {
            forwardChanges.push(parseInt(dataSet[1]));
        }
        if(dataSet[0] == "up") {
            depthChanges.push(-1 * parseInt(dataSet[1]));
        }
        if(dataSet[0] == "down") {
            depthChanges.push(parseInt(dataSet[1]));
        }
    }

    let depthChangeSum = depthChanges.reduce((partialSum, value) => partialSum + value, 0);
    let forwardChangeSum = forwardChanges.reduce((partialSum, value) => partialSum + value, 0);

    console.log("Depth: " + depthChangeSum);
    console.log("Forward: " + forwardChangeSum);

    let product =  depthChangeSum * forwardChangeSum;
    console.log("\nResult: ", product);
}

module.exports.partOne = partOne;