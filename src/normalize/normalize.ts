export default function normalize(numArr: number[]) {
    const min = Math.min(...numArr);
    const max = Math.max(...numArr);
    return  numArr.map((num) => (num - min) / (max - min) );
}