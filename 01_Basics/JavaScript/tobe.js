/**
 * Write a function expect that helps developers test their code.
 * It should take in any value val and return an object with the following two functions.
 * toBe(val) accepts another value and returns true if the two values === each other.
 * If they are not equal, it should throw an error "Not Equal".
 * notToBe(val) accepts another value and returns true if the two values !== each other.
 * If they are equal, it should throw an error "Equal".
 */

var expect = function(val) {
  return {
    toBe: function(comparedVal) {
      if (val !== comparedVal) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function(comparedVal) {
      if (val === comparedVal) {
        throw new Error("Equal");
      }
      return true;
    }
  };
};

try {
  console.log(expect(5).toBe(5)); // true
} catch (error) {
  console.log(error.message);
}

try {
  console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (error) {
  console.log(error.message);
}
