class MeasurementWindow {
    constructor() {
        this.measurements = [];
    }

    add(value) {
        this.measurements.push(value);
    }

    sum() {
        return this.measurements.reduce((partialSum, value) => partialSum + value, 0);
    }
}

module.exports.MeasurementWindow = MeasurementWindow;