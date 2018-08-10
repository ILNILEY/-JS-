/**
 * 输入五个数 求最小众倍数 众倍数是至少能被其中三个数整除的数
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    let numArr = value.trim().split(' ');
    Array.prototype.forEach.call(numArr, item => {
        item = parseInt(item);
    });
    let count = 0, num = 1;
    while (count < 3) {
        for (let i = 0; i < numArr.length; i++) {
            if(num%numArr[i]===0){
                count++;
            }
        }
        if(count<3){
            count = 0;
            num++;
        }
    }
    console.log(num);
}).on('close', () => {
    process.exit(0);
})