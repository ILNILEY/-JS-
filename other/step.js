/**
 * 有一座高度是10级台阶的楼梯，从下往上走，每跨一步只能向上1级或者2级台阶。要求用程序来求出一共有多少种走法。
 * 一个台阶时，一种走法
 * 两个台阶时，两种走法
 * 三个台阶时，如果先走一个台阶，剩下两个台阶有两种走法，如果先走两个台阶，剩下一个台阶有一种走法，总共三种走法
 * 四个台阶时，也按照第一步走的方式不同区分
 * ...
 * n个台阶时 f(n)=f(n-1)+f(n-2)
 */

 // 可用表格记忆 优化算法

 let height = 10;

 function getTotalWay(height){
    if(height===0){
        return 0;
    }
    if(height===1){
        return 1;
    }
    if(height===2){
        return 2;
    }
    return getTotalWay(height-1)+getTotalWay(height-2);
 }

 console.log(getTotalWay(height));
