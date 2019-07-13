const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};

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