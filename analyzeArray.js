// returns an object with the following properties: average, min, max, and length
function analyzeArray(arr) {
    let [average, min, max, length] = [arr[0], arr[0], arr[0], arr.length];
    let sum = 0;
    for (let num of arr) {
        sum += num;
        if (num > max)
            max = num;
        if (num < min)
            min = num;
    }

    if (arr.length === 0)
        return {average: 0, min: 0, max: 0, length: 0};

    return {
        average: sum / length,
        min: min,
        max: max,
        length: length
    }
}

module.exports = analyzeArray;