const capitalize = require('./capitalize.js');

test('empty string', () => {
    expect(capitalize('')).toBe('');
});

test('single character', () => {
    expect(capitalize('a')).toBe('A');
})

test('simple sentence', () => {
    expect(capitalize('my name is Derek')).toBe('My name is Derek');
})

test('special symbol', () => {
    expect(capitalize('!y name is Derek')).toBe('!y name is Derek');
})

const reverseString = require('./reverseString.js');

test('empty string', () => {
    expect(reverseString('')).toBe('');
})

test('single char', () => {
    expect(reverseString('a')).toBe('a');
})

test('single word', () => {
    expect(reverseString('derek')).toBe('kered');
})

test('simple sentence', () => {
    expect(reverseString('My name is Derek!')).toBe('!kereD si eman yM');
})




