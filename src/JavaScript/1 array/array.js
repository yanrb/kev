/*
      Return all of the prime numbers that are less than the argument

      EXAMPLE:
         INPUT    10
         OUTPUT   [2, 3, 5, 7]
 */

export const getPrimesUpTo = (max) => {

   let primeArr = [];
   //generate numbres 1 to MAX and store value in n
   for(let n = 1; n <= max-1; n ++){
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
   let sum = 0;

   //Pull each value of each index within the array
   for(let i = 0; i<=arrInts.length -1 ; i++){
   //add value and store into variable
      sum += arrInts[i];
   }
   return sum;
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

   let yArr = [];

   for(let i = 0; i < arrStrs.length; i++){
      if(arrStrs[i].endsWith('y')){
         yArr.push(arrStrs[i])
      }
   }
   return yArr;
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

   //create a for loop to pull each value of the array length
   //take each value within the array and multiply by the multiplier
   //push multiplied number into a new array

   let multipliedArr = [];
   let multipliedValue = 0;

   for(let i = 0; i < arrInts.length; i++){
      multipliedValue = arrInts[i] * multiplier
      multipliedArr.push(multipliedValue)
   }
   return multipliedArr;
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

   //create a new array to hold similar values
   //create for loops for each array which pulls out array's value
   //compare if the values in the array are similar
   //if array value are similar push to a new array

   // let newArr = [];

   // for(let i = 0; i < arr1.length; i++){
   //    for(let j = 0; j < arr2.length; j++){
   //       if(arr1[i] === arr2[j]){
   //          newArr.push(arr1[i])
   //       }
   //    }
   // }

   // console.log(newArr)
   // return newArr;

};



/*

      Given an array arr[] of N integers, the task is to find the
      largest subset in size of arr[] such that in every pair of numbers
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

   // sort the array in order (desc)

   // iterate through the array one by one
   // for the current number (bigger) check to see
   //    IF divisible
   //       push in with the current array
   //
   //    push the number by itself
   //
   // ===== your code here =====


   let sortAsc = arr.sort();
   let subsets = [];

   // sortAsc = [1,2,3,4]
   for (let i = 0; i < sortAsc.length; ++i) {
      const num = sortAsc[i];

      let subsetsToAdd = [];

      // we look for any existing subset where num
      // is also divisible by all of the number
      for (let j=0; j < subsets.length; ++j ){
         let subset = subsets[j];

         let isNumDivisibleByAllElemInSubset = true;
         for(let k=0; k < subset.length; ++k){
            const element = subset[k];

            if (num % element !== 0) {
               isNumDivisibleByAllElemInSubset = false;
            }
         }

         if (isNumDivisibleByAllElemInSubset) {
            const newSubset = [...subset, num];

         }
      }


      // to check
      if (subsetsToAdd.length > 0) {
         subsets.push(...subsetsToAdd);
      }

      subsets.push([num])

      // create a new subset with only num



   }

   // find the max length of a subset inside the array of subsets
   const subsetLengths = subsets.map(subset => subset.length);
   const maxSubsetLength = Math.max(...subsetLengths);

   // find the subset with the max subset length
   return subsets.find(subset => subset.length === maxSubsetLength);
   // find the longest length subset and then return that



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

   //look at the array as rows and columns
   //create for loop with i as rows
   //create for loop with j as columns

   let newArr = [];

   for(let i = 0; i < twoDimArr.length; i++){
      let sum = 0 ;
      for(let j = 0; j < twoDimArr[i].length; j++){
         sum += twoDimArr[j][i]
      }
      newArr.push(sum)
   }
   return Math.max.apply(Math, newArr);
};