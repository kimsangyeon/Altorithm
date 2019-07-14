const memoization = {};
/**
 * 삼각형 표현 2차원 배열 최대합을 도출해냅니다.
 * memoization 사용하여 이미 계산된 값은 그냥 사용하여 최적화
 * @param {Array[[]]} triangle
 * @param {Array} row
 * @param {Number} index
 * @returns {Number}
 **/
const triangleSerach = (triangle, row, index) => {
    if (triangle.length <= row) {
        return 0;
    }

    if (!memoization[row]) {
        memoization[row] = {}
    } else if (!!memoization[row][index]) {
        return memoization[row][index];
    }

    memoization[row][index] = triangle[row][index] + Math.max(backTracking(triangle, row + 1, index), backTracking(triangle, row + 1, index + 1));
    return memoization[row][index];
};

const memoization = {0: 1, 1: 1};
/**
 * n에 해당하는 피보나치 수열 계산 값 반환합니다.
 * memoization 사용하여 이미 계산된 값은 그냥 사용하여 최적화
 * @param {Number} n
 * @returns {Number}
 */
const fibonacci = (n) => {
    if(!!memoization[n] || n === 0) {
        return memoization[n];
    }


    memoization[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memoization[n];
};