/**
 *  彩色砖块对应24个大写字母，一个字母一个颜色；如果最多存在一对不同颜色的相邻砖块,那么这行砖块就很漂亮的。
*  计算有多少种方式将所有砖块排成漂亮的一行。(如果两种方式所对应的砖块颜色序列是相同的,那么认为这两种方式是一样的。)
*  例如: s = "ABAB",那么小易有六种排列的结果:"AABB","ABAB","ABBA","BAAB","BABA","BBAA",其中只有"AABB"和"BBAA"满足最多只有一对不同颜色的相邻砖块。 
*  输入：一个字符串s,字符串s的长度length(1 ≤ length ≤ 50),s中的每一个字符都为一个大写字母(A到Z) 输出：满足规则的排列方式个数
 */
/**
 * 分析：一开始考虑这个问题我觉得这个题目怎么这么傻，如果有三个以上的字母不管怎么排都不符合规则了。其实这题考的就是统计有几个相同字母。
 * 如果只有一个字母，就只有一种排列方式；两个字母，两种排列方式；三个及其以上字母，零种排列方式
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    value = value.toUpperCase();
    let norepeatArr = [value[0]];
    for (let i = 1; i < value.length; i++) {
        if(!norepeatArr.includes(value[i])){
            norepeatArr.push(value[i]);
        }
        if(norepeatArr.length>=3){
            break;
        }
    }
    switch (norepeatArr.length) {
        case 1: console.log(1); break;
        case 2: console.log(2); break;
        default: console.log(0); break;
    }
}).on('close', () => {
    process.exit(0);
})