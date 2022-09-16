const repeatString = function(theString, reps) {
    let outString = '';
    if (reps >= 0) {
        for (let i = 0; i < reps; i++) {
            outString = outString + theString;
        }
    }else {
        outString = 'ERROR';
    }
    return outString;
};

// Do not edit below this line
module.exports = repeatString;
