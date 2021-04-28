/**
 * 解法一：哈希表
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */
 function duplicate( numbers ) {
    // write code here
    const hash = [];
    for (let x of numbers) {
        hash[x] ? hash[x]++ : hash[x] = 1;
        if (hash[x] > 1) {
            return x;
        }
    }
    return -1;
}
module.exports = {
    duplicate : duplicate
};