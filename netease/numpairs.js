/**
* 牛牛以前在老师那里得到了一个正整数数对(x, y), 牛牛忘记他们具体是多少了。
* 但是牛牛记得老师告诉过他x和y均不大于n, 并且x除以y的余数大于等于k。
* 牛牛希望你能帮他计算一共有多少个可能的数对。
* 输入：包括两个正整数n,k(1 <= n <= 10^5, 0 <= k <= n - 1)。
* 输出：对于每个测试用例, 输出一个正整数表示可能的数对数量。
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    value = value.split(' ');
    let n = parseInt(value[0]);
    let k = parseInt(value[1]);
    let count = 0;
    if(k===0 ){
        count = n*n;
    }else{
        for (let i = k + 1; i <= n; i++) {
            count += parseInt(n / i) * (i - k);
            if (n % i >= k) {
                count += n % i - k + 1;
            }
        }
    }
    console.log(count);
}).on('close', () => {
    process.exit(0);
})