// takes a string and returns it reversed
function reverseString(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

function reverseStringElegant(str) {
    return str.split('').reverse().join('');
}

module.exports = reverseStringElegant;