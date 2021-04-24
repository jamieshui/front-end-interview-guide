/**
 * 解法一：哈希表
 */

const hash = [];
let str = ""; 

//Init module if you need
function Init()
{
    // write code here
    str = "";
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    str += ch;
    hash[ch] ? hash[ch]++ : hash[ch] = 1;
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for (let x of str) {
        if (hash[x] === 1) {
            return x;
        }
    }
    return '#';
}