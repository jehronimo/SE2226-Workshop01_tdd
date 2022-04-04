import fs from 'fs'
import normalize from "../normalize/normalize";

export async function writeJson(filePath: string, numArr: number[]) {
    const maxValue = Math.max(...normalize(numArr))
    const minValue = Math.min(...normalize(numArr))
    const path = filePath + '.json'
    const minMaxObj = {
        min: minValue,
        max: maxValue
    }
    fs.writeFile(path, JSON.stringify(minMaxObj, null, 2), err => {
        if (err) console.log(err)
    })
}

export async function readJson(filePath: string) {
    const path = './' + filePath + '.json'

    try {
        return JSON.parse(fs.readFileSync(path, 'utf-8'))
    } catch (err) {
        console.log('JSON parsing error', err)
    }
}
