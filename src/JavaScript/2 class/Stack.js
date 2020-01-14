// SEE: https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
// You can watch youtube videos explaining the stack data structure
// The idea should be universal regardless of the language

/*

      Implement a Stack data structure
 */
class Stack {
   storage = [];
   storageSize = 0;

   topOfStorage = this.storage[this.storage.length -1];

   constructor(size) {
      this.storageSize = size

   }

   // Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
   // If full -- dont push more items
   push(item) {
      if(this.storage.length <= this.storageSize){
         this.storage.push(item);
      }
   }

   /*
         Removes and returns the "top" item of the stack
         The items are popped in the reversed order in which they are pushed.

         If the stack is empty, then it is said to be an Underflow condition.
         In this case, return undefined and keep stack empty
    */
   pop() {
      if(this.storage.length === 0){
         return undefined;
      }
      const topItem = this.storage[this.storage.length -1]
      this.storage = this.storage.slice(0, this.storage.length -1)
      return topItem;
   }

   /*
         Returns top element of stack.
    */
   peek() {
      return this.storage[this.storage.length -1];
   }

   /*
         Returns true if stack is empty, else false.
    */
   isEmpty() {
      if(this.storage.length === 0){
         return true;
      }else{
         return false;
      }
   }

   /*
         Returns the size of the Stack -- the maximum amount of element the stack can have
    */
   getSize() {
      return this.storageSize;
   }
}




export default Stack;
