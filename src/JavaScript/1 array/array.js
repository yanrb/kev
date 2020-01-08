/*
      Return all of the prime numbers that are less than the argument

      EXAMPLE:
         INPUT    10
         OUTPUT   [2, 3, 5, 7]
 */

export const getPrimesUpTo = (max) => {

   let primeArr = [];
   //generate numbres 1 to MAX and store value in n
   for(let n = 1; n <= max; n ++){
      let isPrime = true;
   //Checks if n is prime
      for(let i = 2; i < n; i++){
         if (n%i === 0){
            isPrime = false;
            break;
         }
      }
   //if isPrime is true pushes n into array
      if(isPrime){
         primeArr.push(n)
      }
   }
   //console.log(primeArr);
   return primeArr;

};


/*

      Given an array arr[] of N integers, the task is to find the
      largest subset of arr[] such that in every pair of numbers
      from that subset, one number is a divisor of the other.

      EXAMPLE:
         INPUT    arr= [1, 2, 3, 4, 5]
         OUTPUT   [1, 2, 4]


      the "%" is called the 'modulo' operator
         the modulo operation finds the remainder
         after division of one number by another

         4 % 2 = 0
         4 % 1 = 0
         2 % 1 = 0

 */

export const getLargestDivisorSubset = (arr) => {
   // ===== your code here =====
   return [];
};


/*
      Given a 2-dimensional (NxN) array, find the maximum sum of columns

      EXAMPLE:
         INPUT
            [[1, 2, 3],
            [[4, 5, 6],
            [[7, 8, 9]]

         OUTPUT  9 + 6 + 3 = 18
 */
export const maxSumCol = (twoDimArr) => {
   // ===== your code here =====
   return undefined;
};