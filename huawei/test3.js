/**
 * 小镇房子按有序整型数组arr按一条直线排列，有n个广告牌，1<=n<=arr.length
 * 广告牌只能插在这个整型数组中出现的坐标点中
 * 以离坐标点最近的广告牌与坐标点之间的距离作为最短距离
 * 求：总的最短距离
 * 输入：输入的最后一个数代表有几个广告牌n 之前的数代表小镇房子坐标
 * 输出：总的最短距离
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (value) => {
    let arr = value.substr(0,value.length-2).split(' ');
    let N = parseInt(value[value.length-1]);
    
}).on('close', () => {
    process.exit(0);
})