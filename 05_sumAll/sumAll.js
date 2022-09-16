const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) && Number.isInteger(int2) && int1 >= 0 && int2 >= 0){
        let result = 0;
        if(int1 > int2){
            for (let i = int2; i <= int1; i++){
                result = result + i;
            }
        }else {
            for (let i = int1; i <= int2; i++){
                result = result + i;
            }
        }
        return result;
    }else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
