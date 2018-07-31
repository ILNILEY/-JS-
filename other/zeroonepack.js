/**
 * 动态规划：背包问题
 * 假设山洞里共有a,b,c,d,e这5件宝物（不是5种宝物），它们的重量分别是2,2,6,5,4，它们的价值分别是6,3,5,4,6，现在给你个承重为10的背包, 怎么装背包，可以才能带走最多的财富。
 * 重要思想：全局最优解包含局部最优解
 * 参考博客：
 * https://blog.csdn.net/mu399/article/details/7722810
 * http://www.hawstein.com/posts/dp-knapsack.html
 */

class packageItem {
    constructor(name, weight, value) {
        this.name = name;
        this.weight = weight;
        this.value = value;
    }
}

function get01PackAnswer(packageItems, packageSize) {
    let bagMaxtrix = [];
    // 初始化背包矩阵 二维数组每一项的首个元素都是0 其余项是状态d(i,j)
    // d(i,j) 表示在这个状态下的最优解
    for (let i = 0; i < packageItems.length; i++) {
        bagMaxtrix.push([0]);
    }
    for (let w = 1; w <= packageSize; w++) {
        for (let i = 0; i < packageItems.length; i++) {
            if (packageItems[i].weight > w) {
                //装不下的情况
                if (i === 0) {
                    bagMaxtrix[i][w] = 0;
                } else {
                    bagMaxtrix[i][w] = bagMaxtrix[i - 1][w];
                }
            } else {
                //装得下的情况
                let itemTotalValue;
                if (i === 0) {
                    bagMaxtrix[i][w] = packageItems[i].value;
                    continue;
                } else {
                    // 这里赋值的理由 是根据全局最优包含局部最优的思想
                    // 在去掉这个元素重量之前的最优价值对应重量加上这个元素本身的重量
                    itemTotalValue = bagMaxtrix[i - 1][w - packageItems[i].weight] + packageItems[i].value;
                    // 每个数位所要比较的值 是 在目前重量条件下没加这个元素之前的值 
                    // 因为背包受重这个条件改变 可能导致没加这个元素的最优重量也发生变化
                    bagMaxtrix[i][w] = itemTotalValue > bagMaxtrix[i - 1][w] ? itemTotalValue : bagMaxtrix[i - 1][w];
                }

            }
        }
    }
    let answer = [];
    for (let i = packageItems.length-1; i >= 0; i--) {
        if (packageSize === 0) {
            // 避免在packageSize为0的时候继续下面的逻辑判断
            break;
        }
        if (i === 0 && packageSize > 0) {
            // 避免在i为0的时候继续下面的逻辑判断 而且 在此条件下剩下的那个元素必定是所求答案的元素之一
            answer.push(packageItems[i].name);
            break;
        }
        if (bagMaxtrix[i][packageSize] - bagMaxtrix[i - 1][packageSize - packageItems[i].weight] === packageItems[i].value) {
            // 这里其实也是利用了全局最优包含局部最优的思想
            answer.push(packageItems[i].name);
            packageSize -= packageItems[i].weight;
        }
    }
    console.log(answer);
}

let nameArr = ['a', 'b', 'c', 'd', 'e'];
let weight = [2, 2, 6, 5, 4];
let value = [6, 3, 5, 4, 6];
let packageItems = [];
for (let [index, item] of nameArr.entries()) {
    packageItems.push(new packageItem(item, weight[index], value[index]));
}
get01PackAnswer(packageItems, 10);


