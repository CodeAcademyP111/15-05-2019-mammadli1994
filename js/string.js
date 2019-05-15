class StringOurClass {
    constructor(str) {
        this.str = str;
        this.lengthOur = 0;
        for (var i = 0; i < Infinity; i++){
            if(this.str[i]==null){
                break;
            }
            this.lengthOur++;
        }
    }

    chartAtOur(num) {
        if (!isNaN(num)) {
            if (this.str[num] != null) {
                return this.str[num];
            } else {
                return "bu index yoxdur";
            }
        } else {
            return "zehmet olmasa reqem yazin";
        }
    }

    splitOur(s) {
        var result = [];
        for (var i = 0; i < this.lengthOur; i++) {
            if (this.chartAtOur(i) != s) {
                result.push(this.chartAtOur(i))
            }
        }
        return result;
    }
}

var string1 = new StringOurClass("he|l|l|o");

// var x = string1.chartAtOur(3);


console.log(string1.splitOur("|"))