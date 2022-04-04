import normalize from "./normalize";

describe('normalize', () => {
    it('should normalize the given array of numbers', () => {
        expect(normalize([5, 8, 4, 7, 3])).toStrictEqual([0.4, 1, 0.2, 0.8, 0]);
    })
})