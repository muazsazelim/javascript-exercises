const repeatString = function(string, int) {
    if (int < 0) {
        return "ERROR"
    }


    let newString = "";
    for (i=0; i<int; i++) {
        newString += string;
    }

    return newString
};

// Do not edit below this line
module.exports = repeatString;
