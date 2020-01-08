/*
      Return all of the prime numbers that are less than the argument

      EXAMPLE:
         INPUT    10
         OUTPUT   [1, 2, 3, 5, 7]
 */

export const getPrimesUpTo = (max) => {

   let x = max;
   let primeNumbers = [];


   
   for(let i = 2; i <= x; i++){
      if(i===2){
         primeNumbers.push(i);
      }
      if(i<2 || !(i%2)){
      }
      if(x % i === 0){
      }else{
      primeNumbers.push(i);
   console.log(primeNumbers);
   }
}

   return primeNumbers;
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
            [[1, 2, 3],]
            [[4, 5, 6],]
            [[7, 8, 9]]

         OUTPUT  9 + 6 + 3 = 18
 */
export const maxSumCol = (twoDimArr) => {

};