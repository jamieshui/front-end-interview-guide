/**
 * 解法一：正则表达式
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return bool布尔型
 */
 function isNumeric( str ) {
    // write code here
    return /^\s*[+-]?(\d+(\.\d*)?|(\.\d+))([eE][+-]?\d+)?\s*$/.test(str.trim());
}
module.exports = {
    isNumeric : isNumeric
};