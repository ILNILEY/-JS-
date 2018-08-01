/**
 * 在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 * Input: {2, 3, 1, 0, 2, 5}  Output:2
 * 感觉注释掉的做法和作弊一样
 * 其实这种范围在0到n-1的可以先让a[i]=i，如果在i位置上已经有a[i]=i证明元素重复
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    let input = value.split(',');
    for (let [index,item] of input.entries()){
        while(item!=index){
            if(item===input[item]){
                
            }
        }       
    }    
    console.log(repeat);
 }).on('close', () => {
    process.exit(0);
})

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', (value) => {
//     let noRepeat = [], repeat = [];
//     let input = value.split(',');
//     for (let item of input){
//         item = item.trim();
//         if(noRepeat.includes(item)){
//             repeat.push(item);
//         }else{
//             noRepeat.push(item);
//         }
//     }    
//     console.log(repeat);
//  }).on('close', () => {
//     process.exit(0);
// })