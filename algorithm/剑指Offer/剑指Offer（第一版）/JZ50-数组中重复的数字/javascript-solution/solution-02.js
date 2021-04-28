/**
 * 解法二：原地哈希
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
    for (let i = 0; i < numbers.length; i++) { // ？很疑惑为什么 for (let i in numbers) 不可以
        while (i !== numbers[i]) {
            let tmp = numbers[i];
            if (tmp === numbers[tmp]) {
                return tmp;
            }
            [numbers[i], numbers[tmp]] = [numbers[tmp], numbers[i]];
        }
    }
    return -1;
}
module.exports = {
    duplicate : duplicate
};