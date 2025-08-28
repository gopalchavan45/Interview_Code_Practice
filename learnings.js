//Async await
//m1
// async function getData() {
//   return "hollow";
// }
// let k = getData();
// k.then((res) => console.log(res));

//m2

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("im from the promises");
  }, 10000);
});
//m3
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("im from the promises");
  }, 5000);
});

// function data() {
//   //js engine not wait for to resolve the promises
//   p.then((ele) => console.log(ele)); //second
//   console.log("hellow namaste javascript"); //last
// }
// data(); // hellow namaste javascript  im from the promises

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
async function asyncData() {
  // js engine wait for the promised to be resolve
  const respones = await p;
  console.log("i will print after the promised resolve");
  console.log(respones);

  const responesz = await p2;
  console.log("i will print after the promised resolve");
  console.log(responesz);
}
asyncData();
function g() {
  console.log("im single thread language");
}
g();
