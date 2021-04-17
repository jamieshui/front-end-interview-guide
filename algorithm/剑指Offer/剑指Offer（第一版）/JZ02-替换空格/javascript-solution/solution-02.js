/**
 * 解法二：遍历数组
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return string字符串
 */
 function replaceSpace( s ) {
    // write code here
    let t = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            t += "%20";
        } else {
            t += s[i];
        }
    }
    return t;
}
module.exports = {
    replaceSpace : replaceSpace
};