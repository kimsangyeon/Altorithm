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