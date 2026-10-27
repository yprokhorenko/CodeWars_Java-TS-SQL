export const numberToReversedArrayOfDigits = (n: number): number[] => {
  return n.toString().split("").reverse().map(Number);
};

console.log(numberToReversedArrayOfDigits(12345));
