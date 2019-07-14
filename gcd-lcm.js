// The greatest common divisor
/**
 * min, max 값의 최대 공약수를 반환합니다.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 **/
const gcd = (min, max) => {
    return min % max === 0 ? max : gcd(max, min % max);
};

// Least common multiple
/**
 * min, max 값의 최소 공배수를 반환합니다.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 **/
const lcm = (min, max) => {
    return min * max / gcd(min, max);
};