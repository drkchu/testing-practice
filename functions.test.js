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




