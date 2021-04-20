/**
 * 解法一：Set
 * - 1. 利用 Set.has() 去重。
 *   2. 最大牌值 - 最小牌值 < 5 且跳过大小王
 */

function IsContinuous(numbers)
{
    // write code here
    const setArr = new Set();
    let minn = 13, maxx = 0;
    for (let x of numbers) {
        if (!x) continue;
        if (setArr.has(x)) return false;
        setArr.add(x);
        minn = Math.min(minn, x);
        maxx = Math.max(maxx, x);
    }
    return maxx - minn < 5;
}