/**
 * arr 배열의 left, right index를 순회하며 quick 정렬을 합니다.
 * @param {Array} arr 
 * @param {Number} left 
 * @param {Number} right 
 */
const quickSort = (arr, left, right) => {
    let index;

    if (left < right) {
        index = partition(arr, left, right);
        quickSort(arr, left, index - 1);
        quickSort(arr, index + 1, right);
    }
};

/**
 * arr 배열의 begin, end index를 순회하며 pivot을 기준으로 배열을 정렬 합니다.
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 * @returns {Number}
 */
const partition = (arr, begin, end) => {
    let left = begin;
    let right = end;
    let pivot = arr[left];
    let tmp;

    while (left < right) {
        while (arr[left] < pivot && left < right) {
            left++;
        }
        while (arr[right] > pivot && left < right) {
            right--;
        }

        tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
    }

    tmp = arr[right - 1];
    arr[right - 1] = arr[begin];
    arr[begin] = tmp;

    return right;
};

const arr = [2, 5, 4, 1, 3, 10, 9, 8, 7];
quickSort(arr, 0, arr.length - 1);