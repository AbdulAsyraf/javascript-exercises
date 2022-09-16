const reverseString = function(theString) {
    let stringLength = theString.length;
    let outString = '';

    for (let i = stringLength - 1; i >= 0; i--) {
        outString = outString + theString.charAt(i);
    }

    return outString;
};

// Do not edit below this line
module.exports = reverseString;
