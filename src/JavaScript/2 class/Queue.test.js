import Queue from "./Queue"


test('TEST #1: constructor, getSize, isEmpty', () => {
   const queue = new Queue(69);
   expect(queue.getSize()).toBe(69);
   expect(queue.isEmpty()).toBe(true);
});

test('TEST #2: all', () => {
   const queue = new Queue(3);
   expect(queue.getSize()).toBe(3);
   expect(queue.peek()).toBe(undefined);
   expect(queue.isEmpty()).toBe(true);
   queue.enqueue("hey");
   expect(queue.isEmpty()).toBe(false);
   expect(queue.peek()).toEqual("hey");
   queue.enqueue("beautiful");
   expect(queue.peek()).toEqual("hey");
   queue.enqueue("jk");
   expect(queue.peek()).toEqual("hey");
   expect(queue.peek()).toEqual("hey");
   queue.enqueue("should be ignored");
   expect(queue.dequeue()).toEqual("hey");
   expect(queue.dequeue()).toEqual("beautiful");
   expect(queue.dequeue()).toEqual("jk");
   expect(queue.dequeue()).toBe(undefined);
   expect(queue.dequeue()).toBe(undefined);
   expect(queue.dequeue()).toBe(undefined);
   expect(queue.dequeue()).toBe(undefined);
   expect(queue.dequeue()).toBe(undefined);
   expect(queue.dequeue()).toBe(undefined);
});
