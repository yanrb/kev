// SEE: https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
// You can watch youtube videos explaining the stack data structure
// The idea should be universal regardless of the language

/*

      Implement a Stack data structure
 */
class Stack {

   constructor() {
      this.storage = {}
      this.size = 0
   }

   // Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
   push(item) {
      this.size++
      this.storage[this.size] = item
   }

   /*
         Removes and returns the "top" item of the stack
         The items are popped in the reversed order in which they are pushed.

         If the stack is empty, then it is said to be an Underflow condition.
         In this case, return undefined and keep stack empty
    */
   pop() {
      let remove = this.storage[this.size]
      delete this.storage[this.size]
      this.size--
      return removed
   }

   /*
         Returns top element of stack.
    */
   peek() {
      return this.storage[this.size]
   }

   /*
         Returns true if stack is empty, else false.
    */
   isEmpty() {
      if(size === 0){
         return true
      }else{
         return false
      }
   }
}

const stack = new Stack()
stack.push('table')
stack.push('bed')
stack.push('chair')