/**
 * 解法二：转数字后判断是否为NaN
 * - Number() 对于不能转换为数字的字符串，返回 NaN。
 */

 function isNumeric( str ) {
    // write code here
    return str.trim() ? !isNaN(Number(str)) : false;
}
module.exports = {
    isNumeric : isNumeric
};