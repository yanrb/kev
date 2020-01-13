import Stack from "./Stack";

test('TEST #1: constructor, getSize, isEmpty', () => {
   const stack = new Stack(69);
   expect(stack.getSize()).toBe(69);
   expect(stack.isEmpty()).toBe(true);
});

test('TEST #2: push pop', () => {
   const stack = new Stack(3);
   expect(stack.getSize()).toBe(3);
   expect(stack.isEmpty()).toBe(true);

   stack.push("hey");
   expect(stack.peek()).toEqual("hey");
   expect(stack.isEmpty()).toBe(false);
});

test('TEST #3: push pop', () => {
   const stack = new Stack(1);
   expect(stack.getSize()).toBe(1);
   expect(stack.isEmpty()).toBe(true);

   stack.push("boobies");
   expect(stack.peek()).toEqual("boobies");
   expect(stack.isEmpty()).toBe(false);

   stack.push("straight");
   expect(stack.peek()).toEqual("boobies");
   expect(stack.isEmpty()).toBe(false);
   expect(stack.pop()).toEqual("boobies");
   expect(stack.isEmpty()).toBe(true);
   expect(stack.pop()).toEqual(undefined);
});

/*
         getSize()
         isEmpty()
         peek()
         pop()
         push(item)
         constructor(size)
 */
