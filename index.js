function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (let num of array) {
    let complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}

/* 
  Time complexity is O(n)
*/

/* 
  Pseudocode:
  - Create a Set to store seen numbers
  - Iterate through the array
  - For each number, calculate the complement needed to reach the target
  - Check if the complement exists in the Set, return true if found
  - Otherwise, add the current number to the Set
  - If the loop completes without finding a pair, return false
*/

/*
  The solution efficiently finds a pair of numbers in the array that adds up to the target. It uses a Set to keep track of seen numbers, allowing us to check for complements in constant time. The time complexity is O(n) as we iterate through the array only once, and the space complexity is also O(n) in the worst case.
*/

// Test cases
console.log("1) Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("2) Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("3) Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("4) Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

console.log("5) Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

console.log("6) Expecting: true");
console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

console.log("7) Expecting: false");
console.log("=>", hasTargetSum([4], 4));