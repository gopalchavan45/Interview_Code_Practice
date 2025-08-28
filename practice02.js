//Ex02
//the value which is divided by 3 is the power of three give as anwser as true
// function isPowerOfThree(n) {
//     if (n < 1) return false;        // Only positive numbers can be powers of 3
//     while (n % 3 === 0) {           // Keep dividing by 3 while divisible
//         n = n / 3;
//     }
//     return n === 1;                 // After dividing out 3s, should end up as 1
// }
// console.log(isPowerOfThree(81))

//Ex02
//Generate the first N powers of three
// function powersOfThree(n) {
//     let result = [];
//     let value = 1;
//     for (let i = 0; i < n; i++) {
//         result.push(value);
//         value *= 3;
//     }
//     return result;
// }

// console.log(powersOfThree(5));

//Ex03
//should be our first word of litter should be capital

// function Capitalize(gopal) {
//   return gopal
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, " ")
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(Capitalize("Hello World"));

//Ex04
//reverse each word
// function reverseEachWord(gopal) {
//   return gopal
//     .split(" ") // split the sentence into words
//     .map((word) => word.split("").reverse().join("")) // reverse each word
//     .join(" "); // join the words back with spaces
// }

// console.log(reverseEachWord("Java Programming"));
// // Output: "avaJ gnimmargorP"

//Ex04
// function gopal() {
//   var n = 56;
//   return 8;
// }
// gopal();
// console.log(gopal());
// console.log(n);

//Ex05
