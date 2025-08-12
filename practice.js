//1.what is shallow copy ?
//2.what is deep copy ?

//Example 1
//  let a =100;
//  let b = a++ + ++a ;  //a++ + ++a 100 + 102 /++a + a++ 101+
//  console.log(b); 202

//Example 2
// let nama = "jatin";
// nama[1] = "G"
// console.log(nama)

//Example 3
// let nama = "My name is Gopal";
// let words = nama.trim().split(" ");
// for(let word of words){
//     if(word){
//         let cap = word[0].toUpperCase() + word.slice(1);
//         console.log(cap)
//     }
// }

//Example 4
// const num = [22, 33, 44, 55, 44, 55];
// let tex = "";
// for (let x in num) {
//   tex = x + " is " + num[x];
// }
// console.log(tex);

//Example 4
// function func1(){
//   return 2;
// }

// function func2(){
//   return 4;
// }

// let a =(func1(),func2())
// console.log(a)

// Example 5
// const arr=['one','two','three'];
// const str='hello';
// const res =arr.includes('on')
// console.log(res);
// const anotherVar = arr.includes('onetwo');
// console.log(anotherVar);
// const newVar = str.includes('ll');
// console.log(newVar);

//Example 6
// console.log(65 == '65');
// console.log(true === 'true');
// console.log(10 == '10'); //It will check value
// console.log(10 === '10'); //It will datatype as well as value

//Example 7
// let a =10;
// let b = new Number(10);
// console.log(typeof b)
// console.log(a==b);
// console.log(a===b)//COz it check DT & V

//Example 8

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
// console.log(shallowCopy);

// Original.nama="kartik"
// console.log(Original);

//Example 9

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
//   result += str1.slice(i) + str2.slice(i);
//   return result;
// }
// let str1 = "hell";
// let str2 = "srap12";
// let final = merged(str1, str2);
// console.log(final);

//Example 12 Reversed string

// let str = "Gopal";
// // let reversedStr = str.split("").reverse().join("");
// // console.log(reversedStr);
// let res = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   res = res + str.charAt(i);
//   console.log(res);
// }
// console.log(res);

//Example 13

// let str = "I am Gopal";
// let spstr = str.split(" ");
// let rev = [];
// spstr.forEach((element) => {

// console.log(rev);
// let s = "hudu " + 1;
// console.log(s);
// console.log(typeof s);

// let arr = [" ", 1, 2, 3];
// let k = (ele) => {
//   return ele + 1;
// };
// let mapArr = arr.map(k);

// console.log(mapArr);

// let result = new Array(1,2,3,4);
// console.log(typeof result)
// console.log(result)
// console.log(result.splice(2,3))
// console.log(result);

// const obj = {
//   name: "gopal",
//   func1: function () {
//     return this.name;
//   },
// };

// const obj1 = {
//   name1: "gopalchavam",
// };
// obj1.__proto__ = obj;
// console.log(obj1.func1())
// console.log(obj);
console.log("start");
setTimeout(() => {
  console.log("i am treated as asychronously");
}, 10000);
console.log("end");
