/**
 * 冒泡排序
 * 时间复杂度与数组长度有关，数组长度越长时间复杂度越大
 * 如果正序O(1) 如果逆序O(n^2)
 * 适合数据量不多的排序
 * 特点：排第n次时第n大的值会在倒数第n个位置
 */
let arr = [1, 4, 19, 43, 2, 42, 5, 22, 11];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i -1; j++) {
        // j的判断里-1是防止越界 -i是没必要判断已经判断过的
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);