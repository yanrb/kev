// SEE: https://www.geeksforgeeks.org/queue-data-structure/
// Another resource: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
// You can watch youtube videos explaining the queue data structure
// The idea should be universal regardless of the language


// I think of a queue like a line in a bank or cashier

/*
      Implement a Queue data structure
 */
class Queue {


   //    Where the size is the maximum number of elements that your queue can have
   constructor(size) {
      this.queueLine = []
      this.first = 0
      this.last = 0
   }

   /*
         adds item to the queue (where do you put the item on the queue)
    */
   enqueue(item) {
      this.queueLine[this.last] = element
      this.last++
   }

   /*
         remove an item from the queue (what item do you remove first in a queue?)
         and returns this item.

         Return undefined if empty
    */
   dequeue(){
      let removed = this.queueLine[this.first]
      delete this.queueLine[this.first]
      this.first++
      return removed
   }


   /*
         Gets the element at the front of the queue without removing it.
         Return undefined if empty
    */
   peek(){
      if(this.isEmpty()){
         return "Queue is empty"
      }else{
         return this.queueLine[0]
      }
   }

   /*
         Check if the queue is full

         Returns TRUE if full. Otherwise, returns false
    */
   isFull() {

   }


   /*
         Checks if queue is empty
         Return TRUE if empty. Otherwise, return false
    */
   isEmpty() {
      if(this.queueLine.length === 0){
         return true
      }else{
         return false
      }

   }

   /*
         Returns the max capacity of elements of the queue
    */
   getSize() {

   }
}

export default Queue;