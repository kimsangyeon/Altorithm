
/**
 * num 값의 약수를 구하여 반환합니다.
 * @param {Number} num
 * @return {Array}
 **/
const getMeasure = (num) => {
    const measure = [1];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            measure.push(i);
        }
    }

    measure.push(num);

    return measure;
};