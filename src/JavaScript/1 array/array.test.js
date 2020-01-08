import {
   getPrimesUpTo,
  // getLargestDivisorSubset,
   //maxSumCol
} from "./array";

// === getPrimesUpTo ===

test('TEST #1: getPrimesUpTo', () => {
   expect(getPrimesUpTo(2)).toEqual([1]);
});

test('TEST #2: getPrimesUpTo', () => {
   expect(getPrimesUpTo(7)).toEqual([1,2,3,5]);
});

test('TEST #3: getPrimesUpTo', () => {
   expect(getPrimesUpTo(15)).toEqual([1,2,3,5,7,11,13]);
});

test('TEST #4: getPrimesUpTo', () => {
   expect(getPrimesUpTo(55)).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
});

test('TEST #5: getPrimesUpTo', () => {
   expect(getPrimesUpTo(255)).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251]);
});

// === getLargestDivisorSubset ===
test('TEST #1: getLargestDivisorSubset', () => {
   expect(getLargestDivisorSubset([1,2,3,4,5])).toEqual([1,2,4]);
});

// === maxSumCol ===
test('TEST #1: maxSumCol', () => {
   expect(maxSumCol(
      [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]
      ]
   )).toBe(18);
});

