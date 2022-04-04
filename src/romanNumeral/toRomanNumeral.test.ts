import romanNumeralize from "./toRomanNumeral";

describe('romanNumeralize', () => {
    it('should convert integers from 1 to 4999 to Roman Numerals', () => {
        expect(romanNumeralize(3724)).toBe('MMMDCCXXIV')
    })
})