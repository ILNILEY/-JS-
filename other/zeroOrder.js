/**
 * 0排序，长度为n的数组，由0到n-1个元素不重复组成，每次交换只能由0和另一个元素进行交换
 * 排序结果，让arr[i]=i
 */
let arr = [2, 1, 3, 0, 4,5,6];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==i){
        for(let m =0;m<arr.length;m++){
            if(arr[m]===0){
                let temp = arr[i];
                arr[i] = arr[m];
                arr[m] = temp;
                break;
            }
        }
        for(let n = 0;n<arr.length;n++){
            if(arr[n]===i){
                let temp = arr[i];
                arr[i] = arr[n];
                arr[n] = temp;
                break;
            }
        }
    }
}
console.log(arr);