/**
 * 解法三：循环判断
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
    if(!str) return false
    let hasNum = false
    let hasDot = false
    let hasE = false
    const isEe = t => t === 'e' || t === 'E'
    const isAs = t => t === '+' || t === '-'
    str = str.trim()                       // 0. 去除首尾空格
    for(let i = 0; i < str.length; i++){
      let t = str[i]
      if ( t === ' ' ) {               // 1. 空格
        return false
      } else if( t >= 0 && t <= 9 ) {  // 2. 数字
        hasNum = true
      } else if( t === '.' ) {        // 3. 小数点
        if( hasDot || hasE ) return false
        hasDot = true
      } else if( isEe(t) ){           // 4. e 或者 E
        if( !hasNum || hasE ) return false
        hasE = true
        hasNum = false                // 防止eE后没有数字了 
      } else if( isAs(t) ) {          // 5. + - 符号
        if( i > 0 && !isEe( str[i - 1] ) ) return false 
      } else {
        return false
      }
    }
    return hasNum
}
module.exports = {
    isNumeric : isNumeric
};

