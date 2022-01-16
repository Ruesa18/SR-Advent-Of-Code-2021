const fs = require('fs');
const { DiagnosticReport } = require('../DiagnosticReport');

function partTwo() {
    const jsonData = fs.readFileSync('day_03/input.json', 'utf8');
    const data = JSON.parse(jsonData);

    let diagnosticReport = new DiagnosticReport(data);
    console.log("Result: " + diagnosticReport.getLifeSupportRating());
}

module.exports.partTwo = partTwo;