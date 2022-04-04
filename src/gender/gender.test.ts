import * as funcs from './gender'

describe('getGender', () => {
    it('should get the gender of the given name', () => {
        return funcs.getGender('kim')
            .then((data) => expect(data).toBe('unisex'))
    })
    it('should return undefined for invalid names', () => {
        return funcs.getGender('hadhsbasdfd2')
            .then((data) => expect(data).toBe(undefined))
    })
})

describe('fetchNameData', () => {
    it('should return name data from api', () => {
        return funcs.fetchNameData('peter')
            .then((data) => expect(data).toEqual({
                "name":"peter",
                "gender":"male",
                "probability":0.99,
                "count":165452
        }))
    })
})

