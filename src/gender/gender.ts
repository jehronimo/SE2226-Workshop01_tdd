import fetch from 'node-fetch';

export default interface nameDataModel {
    name: string;
    gender: string | null;
    probability: number;
    count: number
}

export function fetchNameData(name:string): Promise<nameDataModel>{
    return fetch('https://api.genderize.io/?name=' + name)
        .then((res) => res.json())
}

export function getGender(name:string) {
    const cutoff = 0.7;
    return fetchNameData(name)
        .then((res) => {

            if (!res.gender) return undefined
        
            else if (res.probability >= cutoff) return res.gender
            
            return 'unisex'
        })
}