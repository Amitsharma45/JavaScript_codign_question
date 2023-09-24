// What is Callback in JS?
// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.'

// Adavantages of using Callback
// 1. Callbacks are easy to understand and implement.
// 2. Callbacks can be used synchronously as well as asynchronously.
// 3. Callbacks can be used in a variety of ways.

// Disadvantages of using Callback
// 1. Callbacks can lead to Callback Hell.
// 2. Callbacks are not suitable for synchronous functions.
// 3. Callbacks can not be used for error handling.
// 4. Callbacks can not be used for multiple asynchronous operations.

// Callback Hell
// Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. The code becomes a mess and debugging becomes a nightmare.

// Callback Inversion or Inversion of Control
// Callback inversion is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. The code becomes a mess and debugging becomes a nightmare.

console.log("Start")
function callback(message,cb){
    setTimeout(() => {
        cb(`Hello, ${message}`)
    }, 0);
}
callback('amit',(result)=>{
    console.log(result)
});

console.log("End")