const palindromes = function (theString) {
    let regExp = /[^a-z]/gi;
    let cleanString = theString.replace(regExp, '').toUpperCase();
    let reverseString = cleanString.split('').reverse().join('');
    return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
