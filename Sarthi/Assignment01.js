// Example 01
// we have array , we need to figureout what will be findIndex
// let days = ["Sunday", "friday", "tuesday", "wednesday"];
// let index = days.findIndex((day) => day.startsWith("w"));
// console.log(index);
// let index1 = days.findIndex((day) => day == "saturday");
// console.log(index1);

// Ex 02
// Q.use of includes in array
// let arr = [2, 4, 6, 8];
// console.log(arr.includes());
// console.log(arr.includes(2, -4)); //Q.beside includes
// console.log(arr.includes(10))

// Ex 03
// Q.take array replace two element by one element by using splice
// let arr = [2, 4, 6, 8];
// console.log(arr.splice(1, 2, 10, 4));
// console.log(arr);
// Q.if we need remove last three element of any array how we can do
// console.log(arr.splice(arr.length - 3, 3));
// console.log(arr);

// Ex 04
// give sum of array
// let arr = [2, 3, 4, 5, 6, 5, 5];
// let output = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

// Ex 5
// find max value in array
// let arr = [2, 3, 4, 5, 6, 5, 5];
// let output1 =arr .reduce((max,curr)=>{
//     if(curr>max){
//         max=curr;
//     }
//     return max
// },0)
// console.log(output1)

// Ex 6
// what is undeclared and undefined
// let k;
// console.log(k)
// c = 100;//window scope
// console.log(c);
// console.log(f)
// console.log(typeof c)

// Ex 7
// Q.write the statement tell me the output
// var a = 10;
// {
//   var a = 20;
// }
// var b = a;
// let b = 348;
// console.log(b);//Uncaught SyntaxError: Identifier 'b' has already been declared
// // {
// //     let b=500;
// // }
// console.log(b);

// Ex 8
// what to swip two numbers
// let num1=10;
// let num2=30;
// [num1,num2]=[num2,num1];
// console.log(num1)
// console.log(num2)

// Ex 9
// we have two string and we have to check whether the index one string present in 0 index yes or not
// let arr = ["rohit", "hit"];
// console.log(arr[0].includes(arr[1]));

// Ex 10
//we have two function and what is the length of that function\
// function fun1(a = 0, b, c) {}
// function fun2(a, b = 9, c = 8) {}
// console.log(fun1.length, fun2.length);

// Ex 11
// console.log(subs(10, 2));
// console.log(subs(10)(2));

// function subs(a, b) {
//   if (!b) {
//     return function (c) {
//       return a - c;
//     };

//   }
//   return a - b;
// }
