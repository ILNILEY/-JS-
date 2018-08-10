// 小易有一个长度为N的正整数数列A = {A[1], A[2], A[3]..., A[N]}。
// 牛博士给小易出了一个难题:
// 对数列A进行重新排列,使数列A满足所有的A[i] * A[i + 1](1 ≤ i ≤ N - 1)都是4的倍数。
// 小易现在需要判断一个数列是否可以重排之后满足牛博士的要求。 
// 输入描述:
//  输入的第一行为数列的个数t(1 ≤ t ≤ 10),
//  接下来每两行描述一个数列A,第一行为数列长度n(1 ≤ n ≤ 10^5)
//  第二行为n个正整数A[i](1 ≤ A[i] ≤ 10^9)
// 输出描述:
//  对于每个数列输出一行表示是否可以满足牛博士要求,如果可以输出Yes,否则输出No

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let t = 0, inputCount = 0, inObjArr = [], tempObj = {};
rl.on('line', (value) => {
    if (t === 0) {
        t = value;
        inputCount = value * 2;
    } else {
        if (!tempObj.length) {
            tempObj.length = value;
            inputCount--;
        } else {
            tempObj.numStr = value;
            inObjArr.push(tempObj);
            tempObj = {};
            inputCount--;
        }
        if (inputCount === 0) {
            rl.close();
        }
    }
}).on('close', () => {
    let result = [];
    for (let i = 0; i < t; i++) {
        let countZero = 0, countOne = 0, countTwo = 0;
        for (let item of inObjArr[i].numStr.split(' ')) {
            if (item % 4 === 0) {
                countZero++;
            } else if (item % 2 === 0) {
                countTwo++;
            } else {
                countOne++;
            }
        }
        if (countTwo === 0) {
            if (Math.abs(countOne - countZero) === 1) {
                result.push('Yes');
            } else {
                result.push('No');
            }
        } else {
            if (countZero >= countOne) {
                result.push('Yes');
            } else {
                result.push('No');
            }
        }
    }
    for (let item of result) {
        console.log(item);
    }
});