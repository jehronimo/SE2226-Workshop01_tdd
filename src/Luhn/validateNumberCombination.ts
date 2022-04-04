export default function validateNumberCombination(combination: number) {
    const digits = combination.toString().split('');
    const finalValues = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        if(i % 2 == 0) {
            const multipliedByTwo = Number(digits[i]) * 2;

            (multipliedByTwo > 9)
            ? finalValues.push(multipliedByTwo - 9)
            : finalValues.push(multipliedByTwo);
        } else {
            finalValues.push(Number(digits[i]))
        }
    }
    return finalValues.reduce((prev,curr) => prev + curr) % 10 == 0;
}