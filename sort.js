const numbers = [1,2,3,4,5,10,11];

numbers.sort(); // [1, 10, 11, 2, 3, 4, 5]

function ascending(a, b) {
    return a - b;
}

numbers.sort(ascending); // [1, 2, 3, 4, 5, 10, 11]

function descending(a, b) {
    return b - a;
}

numbers.sort(descending); // [11, 10, 5, 4, 3, 2, 1]