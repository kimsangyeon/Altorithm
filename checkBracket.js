const left = ['(', '{', '['];
const right = [')', '}', ']'];

/**
 * 괄호검사
 * @param {String} code 
 */
const isValidCode = (code) => {
    const stack = [];
    return code.split('').every(c => {
        if (left.indexOf(c) > -1) {
            stack.push(c);
            return true;
        }

        if (right.indexOf(c) > -1) {
            const l = stack.pop();
            return right.indexOf(c) === left.indexOf(l);
        }

        return false;
    });
};