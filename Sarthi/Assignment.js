//Example 1
//Q.What is output of this statement
//  let a =100;
//  let b = a++ + ++a ;  //a++ + ++a 100 + 102 = 202
//  console.log(b); 202

//Example 2
//Q.What is output of this statement
// let nama = "jatin";
// nama[1] = "G";
// console.log(nama);

//Example 3
//Q.first character should be capital of each word
// let nama = "My name is Gopal";
// let words = nama.trim().split(" ");
// for(let word of words){
//     if(word){
//         let cap = word[0].toUpperCase() + word.slice(1);
//         console.log(cap)
//     }
// }

//Example 4
//Q.What is output of this statement
// function func1(){
//   return 2;
// }

// function func2(){
//   return 4;
// }

// let a =(func1(),func2())
// console.log(a)

// Example 5
//Q.What is output of this statement
// const arr=['one','two','three'];
// const str='hello';
// const res =arr.includes('one')
// console.log(res);
// const anotherVar = arr.includes('onetwo');
// console.log(anotherVar);
// const newVar = str.includes('ll');
// console.log(newVar);

//Example 6
//Q.What is output of this statement
// console.log(65 == '65');
// console.log(true === 'true');
// console.log(10 == '10'); //It will check value
// console.log(10 === '10'); //It will datatype as well as value

//Example 7
//Q.What is output of this statement
// let a =10;
// let b = new Number(10);
// console.log(typeof a)
// console.log(typeof b)
// console.log(a==b);
// console.log(a===b)//COz it check DT & V

//Example 8
//Q.based on shallow copy
// let Original = {
//   nama: "GOpal",
//   addres: { city: "mumbai" },
// };
// console.log(Original);
// let shallowCopy = { ...Original };
// console.log(shallowCopy);
// Original.addres.city = "pune";
// console.log(shallowCopy);
// shallowCopy.nama = "kartik";
// shallowCopy.addres.city ="kalegaon"
// console.log(shallowCopy);
// console.log(Original)

// Original.nama="kartik"
// console.log(Original);

//Example 9
//Q.What is output of this statement
// console.log(!"xyz")
// console.log(+true)

//Example 10  CurryFunction

// const curryFunction = (a) => {
//   return function (b) {
//     const mult = a * b;
//     return function (c) {
//       return (res = mult * c);
//     };
//   };
// };
// console.log(curryFunction(2)(2)(2));

//Example 11  alternate charater extract and merged in one string from of two string

// function merged(str1, str2) {
//   let result = "";
//   let i = 0;
//   while (i < str1.length && i < str2.length) {
//     result += str1[i] + str2[i];
//     i++;
//   }
//   console.log(i)
//   result += str1.slice(i) + str2.slice(i);
//   return result;
// }
// let str1 = "hell";
// let str2 = "srap12";
// let final = merged(str1, str2);
// console.log(final);

//Example 12 Reversed string
//approach 1
// let str = "Gopal";
// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);
//approach 2
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   res = res + str.charAt(i);
//   console.log(res);
// }
// console.log(res);
