let str = "hello world";

// Default search (entire string)
console.log(str.lastIndexOf("o")); // Output: 7

// Start searching backward from index 5
console.log(str.lastIndexOf("o", 5)); // Output: 4

// Second parameter is greater than string length
console.log(str.lastIndexOf("o", 20)); // Output: 7 (same as searching entire string)

// Second parameter is negative
console.log(str.lastIndexOf("o", -1)); // Output: -1 (nothing to search)