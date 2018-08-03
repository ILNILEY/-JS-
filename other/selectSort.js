/**
 * 选择排序，每次选出最小的值插到对应位置上
 * 时间复杂度稳定在O(n^2)
 * 因为不管正序还是逆序 这傻逼都得从头遍历到尾
 * 特点：排第n次时第n小的值会在第n个位置
 */

let arr = [1, 4, 19, 43, 2, 42, 5, 22, 11];
for (let i = 0; i < arr.length; i++) {
    let currentMin = i;
    for (let j = i; j < arr.length; j++) {
        if(arr[currentMin]>arr[j]){
            currentMin=j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[currentMin];
    arr[currentMin] = temp;
}
console.log(arr);