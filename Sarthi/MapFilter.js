//1.what is map function
// let arr = [1, 2, 3, 4, 5];
// let tranArr = arr.myMap((c, i, a) => {
//   return c * 4;
// });

// console.log(tranArr)

//2.polyfill for map

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// 3.what is filter function
//Note:difference between map and filter map function modfiy each element of an array based on the condition of callback function and filter modify those element which satisfied the callback function condition

//4.polyfill for filter
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }
//   return temp;
// };

// const Arrr = [1, 2, 3, 4, 5];
// const FilArr = Arrr.myFilter((c, index, arr) => {
//   return c > 0;
// });
// console.log(FilArr);

//If there is no initial value, it takes first element of an array as initial value
//5.What is reduce function?
//6.polyfill for reduce function?
//7.difference between map and filter?
//-->map return some kind of value that value create new array and foreach method will not return anything as well as it will create new array it will change or modify the original array

//output Based Questions

//Que 1 : return only names of students in capital
const students = [
  { name: "Gopal", rollNum: 34, marks: 95 },
  { name: "Raj", rollNum: 15, marks: 65 },
  { name: "Madhav", rollNum: 50, marks: 77 },
  { name: "Kartik", rollNum: 30, marks: 50 },
];

// const output = students.map((stu) => stu.name.toUpperCase());
// console.log(output);

//Que : return only details of that student who score greater than 60
// const output1= students.filter((stu)=>stu.marks<60);
// console.log(output1)

//Que 3 : return whose marks greather than 60 and roll num grether tha 15

// const output = students.filter((stu) => stu.marks > 60 && stu.rollNum > 15);
// console.log(output)

//Que 4:sum of all students marks

// const output = students.reduce((acc,curr)=>acc+curr.marks,0)
// console.log(output)

//Que 5:return only name of student who score more less than 60

// const output = students.filter((stu) => stu.marks < 60).map((stu) => stu.name);
// console.log(output)

//Que 6:return total marks of student with marks greater than 60 after 20 marks have been added to those scored less than 60

// const output = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   }).filter((stu) => stu.marks > 60).reduce((acc,cc)=>acc+cc.marks,0);
//   console.log(output)

var k = 10;
function kk() {
  var k = 9;
  console.log(k);
}
{
  var k = 9;
  console.log(k);
}
console.log(k);
kk();
