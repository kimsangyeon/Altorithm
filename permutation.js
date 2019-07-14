/**
 * 배열 i, j 위치 데이터를 변경 변경합니다.
 * @param {Array} arr 
 * @param {Number} i 
 * @param {Number} j 
 */
const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

/**
 * Pivot을 기준으로 배열의 순열을 구합니다.
 * @param {Array} arr 
 * @param {Number} pivot 
 */
const perm = (arr, pivot) => {
    if (pivot === arr.length) {
        return;
    }

    for (let i = pivot; i < arr.length; i++) {
        swap(arr, i, pivot);
        perm(arr, pivot + 1);
        swap(arr, i, pivot); 
    }
};