/*
   There are three types of edits that can be performed on strings:
      1) insert a character
      2) remove a character
      3) replace a character

   Given two strings. Check if they are one edit (or zero edits) away


   EXAMPLE:
      INPUT    str1= kevin    str2= kevn
      OUTPUT   true

   EXAMPLE
      INPUT    str1= kevin    str2= kevins
      OUTPUT   true

   EXAMPLE
      INPUT    str1= kevin    str2= tevin
      OUTPUT   true

   EXAMPLE
      INPUT    str1= kevin     str2= tedie
      OUTPUT   false


 */


export const isOneOrZeroEditAway = (str1, str2) => {

   
   let length1 = str1.length;
   let length2 = str2.length;

   //If both strings are same = zero edits return true
   if(str1 === str2){
      return true;
   }
   //If both length is greater than 1 = two edits made returns false
   if(length1 - length2 > 1 ){
      return false;
   }

   //Checks each characters and count how many indexes needs changes
   let i = 0;
   let difference = 0;
   while(i < length1){
      if(str1[i] !== str2[i]){
         difference++;
         i++
      }else if(difference > 1){
         return false;
      }else{
         return true;
      }
   }


  if(difference > 1){
     return false;
  }else{
     return true;
  }

};