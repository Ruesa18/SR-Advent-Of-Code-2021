const { BingoNumber } = require("./BingoNumber");

class BingoCard {
    constructor(rows) {
        //TODO convert to rows instead.
        this.rows = [];

        for(let row of rows) {
            let rowNumbers = [];
            for(let number of row) {
                rowNumbers.push(new BingoNumber(number));
            }
            this.rows.push(rowNumbers);
        }
    }

    findNumber(newNumber) {
        this.rows.filter((numbers) => {
            return numbers.filter((number) => {
                return number.found == false
            });
        }).filter((numbers) => {
            return numbers.filter((number) => {
                if(number.value == newNumber){
                    number.found = true
                }
                return true;
            });
        });
    }

    wins() {
        //Check rows
        for(let row of this.rows) {
            if(this.isWinnerRow(row)) {
                return this;
            }
        }

        //Check columns
        for(let i = 0; i < this.rows[0].length; i++) {
            if(this.isWinnerColumn(i)) {
                return this;
            }
        }
        return false;
    }

    isWinnerRow(row) {
        for(let number of row) {
            if(!number.found) {
                return false;
            }
        }
        return true;
    }

    isWinnerColumn(i) {
        for(let row of this.rows) {
            if(!row[i].found) {
                return false;
            }
        }
        return true;
    }

    getSumOfUnmarked() {
        let sum = 0;
        this.rows.filter((numbers) => {
            numbers.filter((number) => {
                if(!number.found) {
                    sum += parseInt(number.value);
                }
            })
        });
        return sum;
    }
}

module.exports.BingoCard = BingoCard;