import {writeJson, readJson} from './readAndWriteJson'

describe('writeandReadJSON', () => {
    it('should write json file containing min and max values', () => {
        return writeJson("sample", [5, 8, 4, 7, 3])
            .then(() => readJson("sample")
            .then((data) => expect(data).toEqual({
                "min":0,
                "max":1
                }))
            )
    })
})