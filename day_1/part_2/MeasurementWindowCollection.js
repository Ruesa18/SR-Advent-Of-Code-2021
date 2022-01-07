const { MeasurementWindow } = require("./MeasurementWindow");

class MeasurementWindowCollection {
    constructor() {
        this.currentIndex = 0;
        this.data = [];
    }

    addData(value) {
        for(let indexAddon = -2; indexAddon < 1; indexAddon++) {
            if(this.currentIndex + indexAddon >= 0) {
                this.createIfNotExists(this.currentIndex + indexAddon);
                this.data[this.currentIndex + indexAddon].add(value);
            }
        }
        this.currentIndex++;
    }

    cleanup() {
        for(let i = this.data.length - 1; i >= 0; i--) {
            if(this.data[i].measurements.length != 3) {
                this.data.pop();
            }
        }
    }

    createIfNotExists(index) {
        if(this.data[index] === undefined) {
            this.data[index] = new MeasurementWindow();
            return true;
        }
        return false;
    }

    getSonarDataSums() {
        let sonarDataSums = [];
        for(let window of this.data) {
            sonarDataSums.push(window.sum());
        }

        return sonarDataSums;
    }
}

module.exports.MeasurementWindowCollection = MeasurementWindowCollection;