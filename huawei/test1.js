/**
 * 找出字符串中重复字符，并将字符按照ascia码的顺序排序，输出排完序之后的字符串
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    let input = value.split('');
    let noRepeat =[],repeat = [];
    for(let item of input){
        if(noRepeat.includes(item)){
            if(!repeat.includes(item)){
                repeat.push(item);
            }
        }else{
            noRepeat.push(item);
        }
    }
    repeat.sort();
    console.log(repeat.join(''));
}).on('close', () => {
    process.exit(0);
});