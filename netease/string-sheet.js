/**
 * 一个由小写字母组成的字符串可以看成一些同一字母的最大碎片组成的。例如,"aaabbaaac"是由下面碎片组成的:'aaa','bb','c'。
 * 牛牛现在给定一个字符串,请你帮助计算这个字符串的所有碎片的平均长度是多少
 */
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',(line)=>{
    let lengthArr = [],gap = 0,sum = 0;
    for(let i = 0;i<=line.length-1;i++){
        if(line[i]===line[i+1]){
            gap++;
        }else{
            lengthArr.push(gap+1);
            gap = 0;
        }
    }
    lengthArr.forEach(item=>{
        sum+=item;
    });
    console.log((sum/lengthArr.length).toFixed(2));
}).on('close',()=>{
    process.exit(0);
})