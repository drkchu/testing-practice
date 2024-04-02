import { Calculator } from './Calculator.js';

const capitalize = require('./capitalize.js');

describe('TESTING CAPITALIZE', () => {
    test('empty string', () => {
        expect(capitalize('')).toBe('');
    });
    
    test('single character', () => {
        expect(capitalize('a')).toBe('A');
    });
    
    test('simple sentence', () => {
        expect(capitalize('my name is Derek')).toBe('My name is Derek');
    });
    
    test('special symbol', () => {
        expect(capitalize('!y name is Derek')).toBe('!y name is Derek');
    });
});


const reverseString = require('./reverseString.js');

describe('TESTING REVERSE STRING', () => {
    test('empty string', () => {
        expect(reverseString('')).toBe('');
    });
    
    test('single char', () => {
        expect(reverseString('a')).toBe('a');
    });
    
    test('single word', () => {
        expect(reverseString('derek')).toBe('kered');
    });
    
    test('simple sentence', () => {
        expect(reverseString('My name is Derek!')).toBe('!kereD si eman yM');
    });
});

let testingCalculator = new Calculator();

describe('TESTING CALCULATOR', () => {
    test('simple add', () => {
        expect(testingCalculator.add(1, 3)).toBe(4);
    });
    
    test('rounding add', () => {
        expect(testingCalculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
    
    test('simple subtract', () => {
        expect(testingCalculator.subtract(4, 10)).toBe(-6);
    });
    
    test('simple multiply', () => {
        expect(testingCalculator.multiply(11, 3)).toBe(33);
    });
    
    test('simple divide', () => {
        expect(testingCalculator.divide(10, 2)).toBe(5);
    });
    
    test('fractional divide', () => {
        expect(testingCalculator.divide(10, 3)).toBeCloseTo(10 / 3);
    });
    
    test('divide by zero', () => {
        expect(() => testingCalculator.divide(1, 0)).toThrow('Do not divide by 0!!!');
    });
});







