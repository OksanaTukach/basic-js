module.exports = function repeater(str, {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator
}) {
    if(addition != undefined || addition === null) {
        if (additionRepeatTimes && additionSeparator) {
            for (let i = 1; i < additionRepeatTimes; i++) {
                str += addition + additionSeparator;
            }
        }
        str += addition;
    }
    let result = str;
    for (let i = 1; i < repeatTimes; i++) {
        result += separator + str;
    }
    return result;
};
  