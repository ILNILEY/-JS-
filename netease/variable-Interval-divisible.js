/**
 * 小Q得到一个神奇的数列: 1, 12, 123,...12345678910,1234567891011...。
 * 小Q现在希望你能帮他计算一下从数列的第l个到第r个(包含端点)有多少个数可以被3整除。
 * 输入：输入包括两个整数l和r(1 <= l <= r <= 1e9), 表示要求解的区间两端。
 * 输出：输出一个整数, 表示区间内能被3整除的数字个数。
 */
// 规律：
// 数列 1 12 123 1234 12345 123456 1234567 12345678 123456789
// 余数 1 0  0   1    0     0      1       0        0

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    line = line.split(' ');
    let l = parseInt(line[0]);
    let r = parseInt(line[1]);
    let lcount = 0;
    let rcount = 0;
    if(parseInt(l/2)===0){
        lcount = 0;
    }else{
        if(l%3===0){
            lcount = 2*parseInt(l/3)-1;
        }else{
            lcount = 2*parseInt(l/3);
        }
    }
    if(r%3 ===2){
        rcount = 2*parseInt(r/3)+1;
    }else{
        rcount = 2*parseInt(r/3);
    }
    console.log(rcount - lcount);
}).on('close', () => {
    process.exit(0);
});