//Q 1: function declaration function statement
// let num
// function square(num){//first priority to the local variable of function
//     let k
//     return num*3
// }
// // console.log(k)
// console.log(square(5));

//Q 2: function expression

// let variable = function (){
//     return "gopal"
// }
// console.log(variable())

//Q 3: what is first class function
// function square(num){
//     return num*num;
// }
// function High(fu){
//     return "Another Function run b "+fu*2
// }
// console.log(High(square(7)))

//Outputbased

// var n =10;
// function fu(){
//     console.log(n)
//     var n=90
// }
// fu()

// Spread vs rest operator

// function fu(...nums){//rest
//     return nums[0]+nums[1]
// }
// var arr=[5,6,7,9]
// console.log(fu(...arr))//spread

// function fu(a, x, y, ...nums) {
//   console.log(x, y,nums);
// }
// fu(2,3,4,5,6,6,7,8,)
//rest or spread always comes to last becasue it always store remainin values not specific
