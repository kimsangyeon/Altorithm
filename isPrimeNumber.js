/**
 * num 값이 소수인지 확인
 * @param {Number} num
 * @returns {Boolean}
 **/
const isPrimeNumber = (num) => {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
};

function isPrimeNumber(num) {
    if (!Number.isInteger(num)) return false;
    return new Array(num).fill(null).every((_, idx) => {
        if (idx + 2 === num) return true;
        if (idx + 2 > num) return true;
        return num % (idx + 2) !== 0;
    });
}