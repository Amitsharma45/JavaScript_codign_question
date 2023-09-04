// const asyncFunc = (callback) =>{
//     setTimeout(()=>{
//      console.log("it reaches at setTimeout function");
//      callback();
//     },1000)
// };
// const greet = () =>{
//     console.log("hello");
// }
// console.log("start");
// asyncFunc(greet);
// console.log("end");

// FOR 0 SECOND

// const asyncFunc = (callback) =>{
//     setTimeout(()=>{
//      console.log("it reaches at setTimeout function");
//      callback();
//     },0)
// };
// const greet = () =>{
//     console.log("hello");
// }
// console.log("start");
// asyncFunc(greet);
// console.log("end");

//Implement a function retry that takes a function and a maximum number of retry attempts. The retry function should attempt to execute the provided function until it succeeds or the maximum number of attempts is reached. After the final attempt, invoke a callback with the result or an error.

// const performTask = (attempt,callback) =>{
//     const random = Math.random();
//     if(random < 0.8){
//         console.log(`Attempt ${attempt} : failed`);
//         throw new Error("task failed");
//     }else{
//         console.log(`Attempt ${attempt}: Succeeded`);
//         callback("task result")
//     }
// }
// function handleResult(result) {
//     console.log("Task completed with result:", result);
//   }
  
//   function handleFailure(error) {
//     console.log("Task failed with error:", error.message);
//   }
  
//   performTask( 5, handleResult, handleFailure);

//Create a function mapAsync that takes an array and an asynchronous mapping function (callback). The mapAsync function should apply the mapping function to each element in the array asynchronously and then invoke a callback with the mapped array.
// const mapAsync = (arr,callback,result) =>{
//     const output = [];
//     let count  = 0
//     for(let i=0; i<arr.length ; i++){
//        result(arr[i],(res)=>{
//         output.push(res);
//         count++;

//         if(arr.length === count){
//             callback(output);
//         }
//        })
//     }
  
// }
// const asyncDouble = (number,callback) =>{
//   return setTimeout(()=>{
//      callback(number * 2) ;
    
//    },100);
// }

// const showResult = (value) => {
//   console.log(`the output of mapAsync function ${[value]}`)
// }

// const arr = [2,4,3,6];
// mapAsync(arr,showResult,asyncDouble)