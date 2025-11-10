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
