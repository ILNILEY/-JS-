/**
 * xx每天必须吃一个水果并且需要每天支付x元的房屋租金。
 * 当前xx手中已经有f个水果和d元钱,小易也能去商店购买一些水果,商店每个水果售卖p元。
 * 帮他计算一下他最多能独立生活多少天。 
 * 输入描述: 输入包括一行,四个整数x, f, d, p(1 ≤ x,f,d,p ≤ 2 * 10^9),以空格分割  输出:输出一个整数, 表示小易最多能独立生活多少天。
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    const condition = value.split(' ');
    const x = parseInt(condition[0]), f = parseInt(condition[1]), p = parseInt(condition[3]);
    let d = parseInt(condition[2]);
    if(d<x){
        console.log(0);
    }else{
        if (d > f * x) {
            let count = 0;
            d -= f*x;
            while(d>(x+p)){
                d -= (x+p);
                count++;
            }
            console.log(count+f);
        } else if (d < f * x) {
            for (let i = 1; i < f; i++) {
                d -= x;
                if(d<x){
                    console.log(i);
                    break;
                }
            }
        }else {
            console.log(f);
        }
    }
}).on('close', () => {
    process.exit(0);
})