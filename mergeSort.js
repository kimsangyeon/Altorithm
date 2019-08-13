/**
 * arr 배열을 받아 merge를 호출하여 merge 정렬을 합니다.
 * @param {Array} arr
 * @returns {Array}
 */
const mergeSort = (arr) => {
   if (arr.length === 1) {
       return arr;
   }

   const middle = parseInt(arr.length / 2);
   const left = arr.slice(0, middle);
   const right = arr.slice(middle);

   return merge(mergeSort(left), mergeSort(right));
};

/**
 * left right 배열을 merge하여 정렬된 배열을 반환합니다.
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let arr = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex]);
            leftIndex++;
        } else {
            arr.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...arr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const arr = [2, 5, 4, 1, 3, 10, 9, 8, 7];
console.log(mergeSort(arr, 0, arr.length - 1));