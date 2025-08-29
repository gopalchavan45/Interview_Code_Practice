//Async await
//m1
// async function getData() {
//   return "hollow";
// }
// let k = getData();
// k.then((res) => console.log(res));

//m2

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("im from the promises");
//   }, 10000);
// });
// //m3
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("im from the promises");
//   }, 5000);
// });

// // function data() {
// //   //js engine not wait for to resolve the promises
// //   p.then((ele) => console.log(ele)); //second
// //   console.log("hellow namaste javascript"); //last
// // }
// // data(); // hellow namaste javascript  im from the promises

// async function asyncData() {
//   // js engine wait for the promised to be resolve
//   const respones = await p;
//   console.log("i will print after the promised resolve");
//   console.log(respones);

//   const responesz = await p;
//   console.log("i will print after the promised resolve");
//   console.log(responesz);
// }
// asyncData();
//Note javascript first creation phase in that we are call function in that we have two promised that can be register and after creation phase it will move forward for execution ,it will put inside the callstack it will print first line of code and as soon as the print come the promised but still promised do not resolve in that case our js engine not await for that it suspended the function it will not block our single thread stack
//2.after promised resolve once again function is put into stack start printing where is left
// async function asyncData() {
//   // js engine wait for the promised to be resolve
//   const respones = await p;
//   console.log("i will print after the promised resolve");
//   console.log(respones);

//   const responesz = await p2;
//   console.log("i will print after the promised resolve");
//   console.log(responesz);
// }
// asyncData();
// function g() {
//   console.log("im single thread language");
// }
// g();

//Callback
// function getData(dataid, callback) {
//   setTimeout(() => {
//     console.log("data is here :" + dataid);
//     if (callback) {
//       console.log("form here call back function call..");
//       callback();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4, () => {
//         console.log("getting data5...");
//         getData(5, () => {
//           console.log("getting data6...");
//           getData(0, () => {
//             console.log("end");
//           });
//         });
//       });
//     });
//   });
// });

// let cart = ["gopal", "chavan"];
// createCard(cart)
//   .then((ele) => console.log(ele))
//   .catch((err) => {
//     console.log(err.message);
//   });
// function createCard(cart) {
//   return new Promise((resolve, reject) => {
//     if (!valided(cart)) {
//       const err = new Error("this is not valid");
//       reject(err);
//     }
//     let orderId = "1234";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
// }
// function valided(cart) {
//   return false;
// }

const student = {
  name: "Gopal",
  x: function () {
    console.log(this.name);
  },
};
student.x();

const student2 = {
  name: "Sapna tai",
};
student.x.call(student2);
