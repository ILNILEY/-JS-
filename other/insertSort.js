/**
 * 插入排序，从第二个数开始，和它前面的数进行比较
 * 如果有比它大的，就交换位置，直到在它之前没有比它大的
 * 特点：第n轮排序之后第n小的数排在第n-1的位置上
 */
let arr = [1, 4, 19, 43, 2, 42, 5, 22, 11];
for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >0 ; j--) {
        if(arr[j]<arr[j-1]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j]=temp;
        }else{
            break;
        }
    }
}
console.log(arr);