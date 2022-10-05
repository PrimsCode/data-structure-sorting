function bubbleSort(arr) {
    const swap = (arr, ind1, ind2) => {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
    }

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j<arr.length; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;