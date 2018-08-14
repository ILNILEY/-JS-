/**
 * 快速排序 不稳定 时间复杂度O(nlogn) 
 * 基于二分思想，排完一轮存在中间有个数，左边都是小于它的，右边都是大于它
 */
function fastSort(arr, leftIndex, rightIndex) {
    let i, j;
    if (leftIndex >= rightIndex) {
        return;
    } else {
        i = leftIndex;
        j = rightIndex
    }
    while (i !== j) {
        while ((arr[j] >= arr[leftIndex]) && (j > i)) {
            j--;
        }
        while ((arr[i] <= arr[leftIndex]) && (j > i)) {
            i++;
        }
        if (i !== j) {
            swap(arr, i, j);
        }
    }
    swap(arr, leftIndex, i);
    fastSort(arr, leftIndex, i - 1);
    fastSort(arr, i + 1, rightIndex);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
fastSort(arr, 0, arr.length - 1);
console.log(arr);