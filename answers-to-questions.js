// // // Q1
// // function myFunction(num1, num2) {
// //     return num1+num2
// //   }
  
// //   const result = myFunction(5,5)

// // //   this funstion will add together 5 and 5 because the its returning num1 + num2

// // // Q2
// // // function myFunction(num1, num2) {
// // //     num1+num2
// // //   }
  
// // //   const result = myFunction(5,5)

// // //   it will return undefiend because it dosent specify what to do with the return key word

// // // Q3

// // function myFunction(num) {
// //     return num-1
// //   }
  
// //   let num = 10
// //   num = myFunction(num)
// //   num = myFunction(num)

// // //   it should return 8 becaus it repeats the funstion twice.

// // // Q4
// // function myFunction(num) {
// //     return num-1
// //   }
  
// //  let num = 10
// //   let add = 3
// //   add = myFunction(add)
// //   add = myFunction(add)

// // //   it will print out 1 if you dont get a syntax error

// // Q5

// function myFunction(num, num1) {
//     console.log(num1)
//   }
  
//   let num = 10
//   let num1 = 2
  
//   myFunction(num)

// //   will say undefiend because no value is assighned to num inside the funstion

// Q6

// function myFunction(num, num1) {
//     console.log(num1)
//   }
  
//   let num = 10
//   let num1 = 2
  
//   myFunction(num1, num)

//   we only get 10 in the console because num1 isent mentioned in the operation.

// Q7

// let counter = 1

// function myFunction() {
//   counter++
//   return counter
// }

// myFunction()
// const num = myFunction()

// console.log(counter)
// the counter inscreases by 2 because counter ++

// Q8
// function myFunction(num1, num2) {
//     return num1 + num2
//   }
  
//   const num1 = 10
//   const num2 = 1
//   const num3 = 4
//   const num4 = 11
//   const num5 = 12
//   const result = myFunction(11, 2)

//   console.log(result)
//   it returns 14 bwecause it draws its values from the const available following thr structure of the funstion.

// Q9
// function myFunction(num1, num2) {
//     console.log(num3)
//   }
  
//   const num1 = 10
//   const num2 = 1
//   const num3 = 20
  
//   myFunction(num3, num1)
// console.log(myFunction)
  //   because its only printing the vaue assighned to num3 it dosent do anything else.

// Q10
// function myFunction(num1, num2, num3) {
//     console.log(num3)
//   }
  
//   const num1 = 10
//   const num2 = 1
//   const num3 = 20
  
//   myFunction(num3, num1, 100)
// console.log(myFunction)
  //   because theires only a fixed value 

//   Q11
//   function myFunction(num1, num2, num3) {
//     return num1 + num2 + num3
//   }
  
//   const num1 = 10
//   const num2 = 1
//   const num3 = 20
  
//   const result = myFunction(1, 1, 1)
// console.log(result)
//   // output is 3 because we are only addtion the value

// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   const num2 = getSomeValue()
//   return num1 * num2
// }

// const result = myFunction(5)
// console.log(result)
// // output is 10 because getSomeVlue()is call inside the myFunction()and calulating the result


//Q 13
// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   const num2 = getSomeValue()
//   return num1 * getSomeValue()
// }

// const result = myFunction(5)
// console.log(result)
// result is 10 because num1 is 5 *getSomeValue()is 2 is calculating 
//Q14
// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   return getSomeValue() * getSomeValue()
// }

// const result = myFunction(5)
// console.log(result)
//result is 4 because calling the function getSomeValue() and multiplication done

//Q 15
// function myFunction(num1) {
//   if(true) {
//     return -10
//   }

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log(result)
// // output - 10 because if condition is true 

//Q 16
// function myFunction(num1) {
//   if(false) {
//     return -100
//   }

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log(result)
// resul is 50 because if condition is false it calculating the num1 *10 
//Q 17
// function myFunction(num1) {
//   return -100

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log (result)
// output is -100 because first  return line is run
//Q 18
// function myFunction(num1) {

//   return num1 * 10

//   return -100
// }

// const result = myFunction(5)
// console.log(result)
// output is 50 because it return num1 *10
//Q19 
// function myFunction(num1, num2, num3) {
//   return num2
// }

// const result = myFunction(5, 10, 15)
// console.log(result)
// output is 10 because it return num2 
//Q 20
// function myFunction(num1, num2, num3) {
//   return num1 + num3
// }

// const num1 = 20
// const num2 = 200
// const num3 = 1000

// const result = myFunction(5, 10, num3, 15)
// console.log(result)
//output is 1005
//Q 21
// function myFunction(num1, num2) {
//   const result = num1+num2
//   return result
// }

// const result = myFunction(10, 20)
// myFunction(100, 2)
// console.log(result)
// output is 30 because num1 +num2

// Q 22
// function myFunction(num1, num2) {
//   let result = num1+num2
// //   return result
// // }

// let result = 0
// // myFunction(100, 2)
// // console.log(result)
//  // output is 0 because we declare the result =0  
//  //Q 23
//  function myFunction(num1, num2) {
//   result = num1+num2
// }

// let result = 0
// myFunction(100, 2)
// console.log(result)

// Q24
//     function myFunction(num1, num2) {
//     const result = num1+num2
//     return 100
//   }
  
//   const result = myFunction(5, 2)
//   console.log(result)
//   rives out 100 because that is the function thats returned.
// Q25
function myFunction(a) {
    let b = 20
    
    console.log("a:", a)
    console.log("b:", b)
    console.log("c:", c)
  }
  
  let a = 1
  let b = 2
  let c = 3
  
  myFunction(100)

//   the value in my function is assighned to a then the rest in order of run.