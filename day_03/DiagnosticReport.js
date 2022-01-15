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
            let amountOnes = 0;
            let amountZeros = 0;

            for(let number of this.reportNumbers) {
                if(number[i] == 1) {
                    amountOnes++;
                }else{
                    amountZeros++;
                }
            }
            if(amountOnes > amountZeros) {
                this.gamma += "1";
                this.epsilon += "0";
            }else{
                this.gamma += "0";
                this.epsilon += "1";
            }
        }

        return this;
    }

    getPowerConsumption() {
        let gammaDecimal = parseInt(this.gamma, 2);
        let epsilonDecimal = parseInt(this.epsilon, 2);

        return gammaDecimal * epsilonDecimal;
    }
}

module.exports.DiagnosticReport = DiagnosticReport;