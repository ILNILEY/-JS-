/**
 * 找出最大字串，如果两个字串长度一样，则选择ascia码值比较小的那串
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    let maxGap = 0, gap = 0, lastend = 0, string = '';
    for (let i = 0; i < value.length; i++) {
        if (value[i + 1] !== undefined && value[i] === value[i + 1]) {
            gap++;
        } else {
            if (gap > maxGap) {
                string = value.substr(lastend, gap+1);
                maxGap = gap;
            } else if (gap === maxGap) {
                    if(string===''){
                        string = value.substr(lastend,gap+1)
                    }else{
                        if (value[i] < string[0]) {
                            string = value.substr(lastend, gap+1);
                        }
                    }
            }
            gap = 0;
            lastend = i + 1;
        }
    }
    console.log(string);
}).on('close', () => {
    process.exit(0);
})
