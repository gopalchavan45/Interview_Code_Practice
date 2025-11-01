// Curiosity 1
// var a = [1, 2, 3, 4, 5];
// function print(b,...a) {
//   console.log(a);
// }
// print(1,2,3,4,5);

// Curiosity 2
// const arr = [1, 2, 4, 5, 6];
// const arr1 = arr.map((ele) => {
//   return (ele = 1);
// });
// console.log(arr1);

// Curiosity 3
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// console.log(Object.entries(obj))

// Curiosity 4

// const arr = [10, "q", "Gopal", 100];
// const Num = [];
// const str = [];
// const ch = [];
// arr.forEach((ele) => {
//   if (typeof ele == "number") Num.push(ele);
//   else if( typeof ele == "string") {
//     if(ele.length>1)str.push(ele);
//     else ch.push(ele)
//   }

// });
// console.log(Num)
// console.log(str)
// console.log(ch)

// Curiosity 5

// const obj1={};
// const obj2={
//     name:"Gopal Chavan"
// }

// const obj3={
//     name:"Sapna chavan"
// }

// obj1[obj2]={
//     name:"Raghau Chavan"
// }

// obj1[obj3]={
//     name:"kiran chavan"
// }

// console.log(obj1[obj2])

// Curiosity 6
//It is example of function carrying
// function sum(a,b){
//     if(a && b) return a+b;
//     return function sum(b){
//         console.log("here maching the callar")
//         return a+b;
//     }
// }

// console.log(sum(1)(2))
// console.log(sum(2,4))

// Curiosity 7

// console.log([] === []); // this condition always return false since javascript campares object by reference not value.

// Curiosity 8

// let str = "my name is Gopal";
// let newStr = str.split(" ").join("");
// console.log(newStr);
// let count = {};
// for (let i = 0; i < newStr.length; i++) {
//   let val = newStr[i];
//   console.log(val);
//   count[val] = (count[val] || 0) + 1;
// }

// console.log(count)

// Curiosity 9

// let str = "my name is Gopal";
// let newStr = str.split(" ");
// console.log(newStr);
// let sentence = "";
// for (let i = newStr.length - 1; i >= 0; i--) {
//   sentence += newStr[i] + " ";
// }
// console.log(sentence)

// Curiosity 10

let obj = {
  name: "kartik",
  abc: {
    name: "developer",
  },
};

let obj2 = { ...obj }; //here we are using spread operator which create shallow copy which means only the top level element will be copid and nested object will remain as referece
obj2.abc.name = "developer";
obj2.name = "gopal";
console.log(obj);
