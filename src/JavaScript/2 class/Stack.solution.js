// SEE: https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
// You can watch youtube videos explaining the stack data structure
// The idea should be universal regardless of the language

/*

      Implement a Stack data structure
 */
class Stack {
   arr = [];
   stackSize = 0;


   //    Where the size is the maximum number of elements that your stack can have
   constructor(size) {
      this.stackSize = size;
   }

   // Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
   // If full -- dont push more items
   push(item) {
      // IF arr.length === stackSize
      //    DONT push
      // ELSE push

      if (this.arr.length < this.stackSize) {
         this.arr = this.arr + [item];
      }
   }

   /*
         Removes and returns the "top" item of the stack
         The items are popped in the reversed order in which they are pushed.

         If the stack is empty, then it is said to be an Underflow condition.
         In this case, return undefined and keep stack empty
    */
   pop() {
      // CASE: if empty



   }

   /*
         Returns top element of stack.
    */
   peek() {
      const topIndex = this.arr.length - 1;

      // out of bounds
      if (topIndex < 0) {
         return undefined
      } else {
         return this.arr[topIndex];
      }
   }

   /*
         Returns true if stack is empty, else false.
    */
   isEmpty() {
      const topIndex = this.arr.length - 1;
      return topIndex < 0;
   }

   /*

         Returns the size of the Stack
    */
   getSize() {

   }

}

export default Stack;