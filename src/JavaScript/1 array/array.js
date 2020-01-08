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
      Given an array of integers, return the sum of the elements of an array
      EXAMPLE #1:
         INPUT
            arr            [1, 2, -3]
         OUTPUT            0

      EXAMPLE #1:
         INPUT
            arr            [1, 2, 3, 69]
         OUTPUT            75


 */
export const getSum = (arrInts) => {
   // ===== your code here =====
};

/*
      Given an array of strings, return an array of strings that contains the elements of the argument array that ends
      with a letter "y"

      Example #1
         INPUT          ["Bob", "roB", "keVin"]
         Output         []

      Example #2
         INPUT          ["bryan", "why"]
         OUTPUT         ["why"]

      Example #3
         INPUT          ["Chris", "riley", "cHantay", "Megan", "stally"]
         OUTPUT         ["riley", "cHantay", "stally"]

 */
export const getNamesThatEndsWithAY = (arrStrs) => {
   // ===== your code here =====
};



/*
      Given an array of integers and an integer multiplier, return a new array whose values are scaled by the multiplier
       (do not manipulate the argument array. i.e. do not do in-place array manipulation)

      EXAMPLE #1:
         INPUT
            arr            [1, 2, 3]
            multiplier     2
         OUTPUT            [2, 4, 6]

      EXAMPLE #2
         INPUT
            arr            [3, 5, 7]
            multiplier     9
         OUTPUT            [27, 45, 63]
 */
export const multiplyArrayElements = (arrInts, multiplier) => {
   // ===== your code here =====
};

/*
      Given two arrays (arr1, arr2), get the Union of two arrays
      UNION (set theory): The union of two sets contains all the elements contained in either set (or both sets).

      For example, you and a new roommate decide to have a house party, and you both invite your circle of friends.
      At this party, two sets are being combined, though it might turn out that there are some friends that
      were in both sets. The friends that are shared by you and your roommate is the intersection of the two sets.

         EXAMPLE #1:
         INPUT
            arr1           ["red", "green", "blue"]
            arr2           ["red", "yellow", "blue"]
         OUTPUT            ["red"]

         EXAMPLE #2
         INPUT
            arr1           [1, 2, 3]
            arr2           [2, 2, 3, 4]
         OUTPUT            [2, 3]
 */
export const getIntersection = (arr1, arr2) => {
   // ===== your code here =====
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