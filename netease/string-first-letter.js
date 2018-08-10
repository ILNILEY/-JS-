/**
 * 输入一串字符串的缩写 缩写是每个单词的首字母拼接的字符串
 */
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',(value)=>{
    let arr = value.split(' ');
    let result = '';
    for(let item of arr){
        result += item[0];
    }
    console.log(result);
}).on('close',()=>{
    process.exit(0);
})