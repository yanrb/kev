import {
   replaceAllXChars,
   hasUniqueCharacters,
   isPalindrome,
   formatToCurrency
} from "./string"

test('TEST #1: replaceAllXChars', () => {
   expect(replaceAllXChars("hxllo therx kxvin")).toBe("hello there kevin");
});


test('TEST #1: hasUniqueCharacters', () => {
   expect(hasUniqueCharacters("asdfg")).toBe(true);
});

test('TEST #2: hasUniqueCharacters', () => {
   expect(hasUniqueCharacters("a%a")).toBe(false);
});

test('TEST #3: hasUniqueCharacters', () => {
   expect(hasUniqueCharacters("asdfgasdwqeqweqw")).toBe(false);
});

test('TEST #4: hasUniqueCharacters', () => {
   expect(hasUniqueCharacters("qwertyuiopmnbvcxz!@#$5")).toBe(true);
});

// ===== isPalindrome

test('TEST #1: isPalindrome', () => {
   expect(isPalindrome("asa")).toBe(true);
});

test('TEST #2: isPalindrome', () => {
   expect(isPalindrome("a%a")).toBe(true);
});

test('TEST #3: isPalindrome', () => {
   expect(isPalindrome("asdfgasdwqeqweqw")).toBe(false);
});

test('TEST #4: isPalindrome', () => {
   expect(isPalindrome("moom")).toBe(true);
});

// ===== formatToCurrency =====
test('TEST #0: formatToCurrency', () => {
   expect(formatToCurrency("1")).toBe("$0.01");
});

test('TEST #0.a: formatToCurrency', () => {
   expect(formatToCurrency("10")).toBe("$0.10");
});

test('TEST #0.b: formatToCurrency', () => {
   expect(formatToCurrency("100")).toBe("$1.00");
});

test('TEST #0.c: formatToCurrency', () => {
   expect(formatToCurrency("100000")).toBe("$1,000.00");
});

test('TEST #1: formatToCurrency', () => {
   expect(formatToCurrency("123asd")).toBe("$1.23");
});

test('TEST #2: isPalindrome', () => {
   expect(formatToCurrency("")).toBe("$0.00");
});

test('TEST #3: formatToCurrency', () => {
   expect(formatToCurrency("0000040")).toBe("$0.040");
});

test('TEST #4: formatToCurrency', () => {
   expect(formatToCurrency("#0000001asldk2nd()3")).toBe("$1.23");
});

test('TEST #5: formatToCurrency', () => {
   expect(formatToCurrency("#0000001asldk2nd()31234")).toBe("$12,312.34");
});