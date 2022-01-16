const fs = require('fs');

function partOne() {
    const jsonData = fs.readFileSync('day_04/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    console.log(data);
}

module.exports.partOne = partOne;