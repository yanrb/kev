/*
   Given a string, replace all occurrence of "x" with "e"

   EXAMPLE #1:
      INPUT    "hxllo therx kxvin"
      OUTPUT   "hello there kevin"
 */

 /*
export const replaceAllXChars = (str) => {
   return "TO DO";
};
*/

//For loop

export const replaceAllXChars = (str) => {

   let changeX = "";
   for(let i = 0 ; str.length < i; i++){
      if(str.charAt(i) === 'x'){
      changeX += 'e';
   }else{
      changeX += str.charAt(i);
   };

};
  
return(changeX);
};


//Using replace()

export const replaceAllXChars = (str) => {
   return str.replace(/x/g, 'e');
}

