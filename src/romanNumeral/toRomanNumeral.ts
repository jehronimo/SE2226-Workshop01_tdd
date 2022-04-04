export default function romanNumeralize(num: number) {
  const romanValues: {[key: string]: number} = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
      };

  const result = "";

  for (const key in romanValues) {
    while (num >= romanValues[key]) {
      result += key;
      num -= romanValues[key]
    }
      };
  return result;
    
}

