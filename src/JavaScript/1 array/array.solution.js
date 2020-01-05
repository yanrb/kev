export const getPrimesUpTo = (max) => {
   let primes = [];

   for (let i = 1; i < max; i += 1) {
      const isDivisibleByAPrime = !(primes.length === 0)
         && primes.find(prime => (prime !== 1) && (i % prime) === 0) !== undefined;

      if (!isDivisibleByAPrime) {
         primes.push(i);
      }
   }

   return primes;
};

export const getLargestDivisorSubset = (arr) => {
   let subsets = [];

   // order min to max
   const ascArr = arr.sort((a, b) => a - b);

   // iterate through each number of the sorted array
   for (const num of ascArr){
      let subsetsToAppend = [];

      // be mindful when you manipulate the array whilst you are iterating it

      // Check your current subsets to see if there are any subset that the "num" can be added to
      // That is, all of the elements in this subset must divide the num with 0 remainder
      for (let subset of subsets) {
         const isDivisibleByAll = subset.find(n => num % n !== 0) === undefined;
         if (isDivisibleByAll) {
            subsetsToAppend.push([...subset, num]);
         }
      }
      subsets = [...subsets, ...subsetsToAppend, [num]];
   }

   // find the max length of a subset inside the array of subsets
   const subsetLengths = subsets.map(subset => subset.length);
   const maxSubsetLength = Math.max(...subsetLengths);

   // find the subset with the max subset length
   return subsets.find(subset => subset.length === maxSubsetLength);
};

export const maxSumCol = (twoDimArr) => {

   // let i be the col index
   // let j be the row index

   let colSums = [];
   for (let i = 0; i < twoDimArr.length; ++i) {
      let colSum = 0;
      for (let j = 0; j < twoDimArr.length; ++j) {
         colSum += twoDimArr[j][i];
      }
      colSums = [...colSums, colSum];
   }

   return Math.max(...colSums);
};