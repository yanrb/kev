// SEE: https://www.geeksforgeeks.org/queue-data-structure/
// Another resource: https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
// You can watch youtube videos explaining the queue data structure
// The idea should be universal regardless of the language


// I think of a queue like a line in a bank or cashier

/*
      Implement a Queue data structure
 */
class Queue {
    queueLine = [];
    queueSize = 0;

   //    Where the size is the maximum number of elements that your queue can have
   constructor(size) {
        this.queueSize = size;
   };

   /*
         adds item to the queue (where do you put the item on the queue)
    */
   enqueue(item) {
        if(this.queueLine.length < this.queueSize){
            this.queueLine.push(item);
        };
   };

   /*
         remove an item from the queue (what item do you remove first in a queue?)
         and returns this item.

         Return undefined if empty
    */
   dequeue(){
        if(this.queueLine.length === 0){
            return undefined;
        };
        const firstItem = this.queueLine[0];
        this.queueLine.shift();
            return firstItem;
   };


   /*
         Gets the element at the front of the queue without removing it.
         Return undefined if empty
    */
   peek(){
      if(this.isEmpty()){
         return undefined;
      }else{
         return this.queueLine[0];
      };
   };

   /*
         Check if the queue is full

         Returns TRUE if full. Otherwise, returns false
    */
   isFull() {
        if(this.queueLine === this.queueSize){
            return "Queue is full.";
        };
   };


   /*
         Checks if queue is empty
         Return TRUE if empty. Otherwise, return false
    */
   isEmpty() {
      if(this.queueLine.length === 0){
         return true;
      }else{
         return false;
      };
   };

   /*
         Returns the max capacity of elements of the queue
    */
   getSize() {
    return this.queueSize;
   };
};

export default Queue;