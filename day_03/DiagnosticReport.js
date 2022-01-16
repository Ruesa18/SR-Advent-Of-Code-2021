class DiagnosticReport {

    constructor(report) {
        this.reportNumbers = report;
        this.gamma = "";
        this.epsilon = "";
    }

    findGammaAndEpsilon() {
        this.gamma = "";
        this.epsilon = "";

        for(let i = 0; i < this.reportNumbers[0].length; i++) {
            let mostCommonBit = this.getMostCommonBitAt(this.reportNumbers, i);
            
            if(mostCommonBit == 1) {
                this.gamma += "1";
                this.epsilon += "0";
            }else{
                this.gamma += "0";
                this.epsilon += "1";
            }
        }

        return this;
    }

    getMostCommonBitAt(numbers, position) {
        let amountOnes = 0;
        let amountZeros = 0;
        for(let number of numbers) {
            if(number[position] == 1) {
                amountOnes++;
            }else{
                amountZeros++;
            }
        }
        if(amountOnes == amountZeros) {
            return -1;
        }
        return amountOnes > amountZeros ? 1 : 0;
    }

    getLeastCommonBitAt(numbers, position) {
        let amountOnes = 0;
        let amountZeros = 0;
        for(let number of numbers) {
            if(number[position] == 1) {
                amountOnes++;
            }else{
                amountZeros++;
            }
        }
        if(amountOnes == amountZeros) {
            return -1;
        }
        return amountOnes < amountZeros ? 1 : 0;
    }

    getPowerConsumption() {
        let gammaDecimal = parseInt(this.gamma, 2);
        let epsilonDecimal = parseInt(this.epsilon, 2);

        return gammaDecimal * epsilonDecimal;
    }

    getOxygenGeneratorRating(numbers = this.reportNumbers, i = 0) {
        if(numbers.length == 1) {
            return parseInt(numbers[0], 2);
        }

        let newNumbers = [];
        let mostCommonBit = this.getMostCommonBitAt(numbers, i);

        if(mostCommonBit == -1) {
            for(let number of numbers) {
                if(number[i] == 1) {
                    newNumbers.push(number);
                }
            }
            return this.getOxygenGeneratorRating(newNumbers, ++i);
        }

        for(let number of numbers) {
            if(number[i] == mostCommonBit) {
                newNumbers.push(number);
            }
        }

        return this.getOxygenGeneratorRating(newNumbers, ++i);
    }

    getCO2ScrubberRating(numbers = this.reportNumbers, i = 0) {
        if(numbers.length == 1) {
            return parseInt(numbers[0], 2);
        }

        let newNumbers = [];
        let mostCommonBit = this.getLeastCommonBitAt(numbers, i);

        if(mostCommonBit == -1) {
            for(let number of numbers) {
                if(number[i] == 0) {
                    newNumbers.push(number);
                }
            }
            return this.getCO2ScrubberRating(newNumbers, ++i);
        }

        for(let number of numbers) {
            if(number[i] == mostCommonBit) {
                newNumbers.push(number);
            }
        }

        return this.getCO2ScrubberRating(newNumbers, ++i);
    }

    getLifeSupportRating() {
        let oxygenGeneratorRating = this.getOxygenGeneratorRating();
        let co2ScrubberRating = this.getCO2ScrubberRating();
        
        return oxygenGeneratorRating * co2ScrubberRating;
    }
}

module.exports.DiagnosticReport = DiagnosticReport;