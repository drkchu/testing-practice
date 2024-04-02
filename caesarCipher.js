// takes a string and a shift factor and returns it with each character “shifted”
// note: str in { .,?!abcdefghijklmnopqrstuvwxyz}
function caesarCipher(str, shift) {
    const alphabet = ' .,?!abcdefghijklmnopqrstuvwxyz';

    const handleWrap = (index) => index % (alphabet.length);

    return str.split('').map((character) => {
        let currIndex = alphabet.indexOf(character);
        return alphabet[handleWrap(currIndex + shift)];
    }).join('');
}

module.exports = caesarCipher;