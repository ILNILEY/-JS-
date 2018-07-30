/**
 * 题目大意：输入一串01任意组合的字符串，输出其中最大的01间隔子串长度
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    let maxLength = 0, gap = 0;
    for (let i = 0; i < line.length-1; i++) {
        if (line[i] !== line[i + 1]) {
            gap++;
        } else {
            if (gap+1 > maxLength) {
                maxLength = gap+1;
            }
            gap = 0;
        }
    }
    if (gap+1 > maxLength) {
        maxLength = gap+1;
    }
    console.log(maxLength);
}).on('close', () => {
    process.exit(0);
});