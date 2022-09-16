const removeFromArray = function(inArray, ...toRemove) {
    for (let i = 0; i < inArray.length; i++){
        for (let j = 0; j <  toRemove.length; j ++){
            if (inArray[i] === toRemove[j]){
                inArray.splice(i, 1);
                i--;
            }
        }
    }
    return inArray;
};

// Do not edit below this line
module.exports = removeFromArray;
