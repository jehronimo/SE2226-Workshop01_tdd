import validateNumberCombination from './validateNumberCombination';

describe('validateNumberCombination', () => {
    it('should validate the input combination', () => {
        expect(validateNumberCombination(4137894711755904)).toBe(true)
    })
})