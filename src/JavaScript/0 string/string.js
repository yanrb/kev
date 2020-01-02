/*

   RESOURCES:
      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
      https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods

 */

/*
   Given a string, replace all occurrence of "x" with "e"

   EXAMPLE #1:
      INPUT    "hxllo therx kxvin"
      OUTPUT   "hello there kevin"
 */

export const replaceAllXChars = (str) => {

   let changeX = "";
   for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === 'x') {
         changeX += 'e';
      } else {
         changeX += str.charAt(i);
      ;}
   };
   return changeX;
};


/*
   Determine if a string has all unique characters

   Return TRUE if string input has all unique characters. Otherwise, return FALSE

   EXAMPLE:
      INPUT    abc
      OUTPUT   true
 */

export const hasUniqueCharacters = (str) => {
   
   let status = true; 
   for (let i = 0; i < str.length; i++){
      for(let x = i+1; x < str.length; x++){
         if(str[i] == str[x]){
            status = false;
         };
       };
      };
      return status;
   };


/*
   Determine if a string is a palindrome
   Return TRUE if it is. Otherwise, return FALSE

   Palindrome: a word, phrase, or sequence that reads the same backward as forward
      e.g., "madam" or "nurses run"
 */

export const isPalindrome = (str) => {

   let reverseStr = '';
   let forwardStr = str;
   let status = true;

   for(let i = str.length -1; i>=0; i--){
      reverseStr += str[i];
   };
   if(forwardStr === reverseStr){
      return status;
   }else{
      status = false;
      return status;
      };
   };



/*
   DIFFICULTY: Challenging

   Given a string, format it such that it only contains a number and it is formatted with two
   decimal places and has a leading "$"

   EXAMPLE #1:
      INPUT       "12345"
      OUTPUT      "$123.45"

   EXAMPLE #2:
      INPUT       "123asd"
      OUTPUT      "$1.23"

   EXAMPLE #3:
      INPUT       ""
      OUTPUT      "$0.00"

   EXAMPLE #4:
      INPUT       "0000040"
      OUTPUT      "$0.040"

   EXAMPLE #5:
      INPUT       "#0000001asldk2nd()3"
      OUTPUT      "$1.23"

 */
export const formatToCurrency = (str) => {


   //define array of numbers
   //define length of array

   //create for loop to loop through str indexes
   //create for loop to loop through numbers array indexes
   //if statement to compare str index against array index
   //if statement match with array index, take index and + into new  variable

   //new variable and count to end of index - 2 indexes and add in "."
   //move to index 0 insert "$"



  let oldStr = str;
  let onlyNumbers = '';
  let numbers =["1", "2","3", "4", "5", "6", "7", "8", "9", "0", "."]
  let numbersLength = numbers.length;

   for(let i = 0; i <= str.length; i++)
      for(let n = 0; n <= numbersLength; n++){
         if(str[i] === numbers[n]){
            onlyNumbers += str[i];
         }
      
      }
      console.log(onlyNumbers);
   }
   




   // === CODE HERE ===

