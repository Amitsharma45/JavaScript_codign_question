// Closure is a function that has access to the parent scope, even after the parent function has closed.    
// Lexical Scope: A function can access variables defined in the parent function, even after the parent function has closed.
// Lexical environment: The lexical environment is the environment where the code was written.

// function outer(){
//     var a= 'outer function';
//     function inner(){
//         console.log(a)
//     }
//     return inner;
// }
// const res = outer();
// res();

// Advantages of Closure
// 1. Closures can be used to implement private methods.
// 2. Closures can be used to implement currying in JS.
// 3. Closures can be used to implement partial applications in JS.
// 4. Closures can be used to implement function composition in JS.
// 5. Closures can be used to maintain state in async world.
// 6. Closures can be used to cache data.
// 7. Closures can be used to implement memoization in JS.
// 8. Closures can be used to implement data hiding and encapsulation in JS.
// 9. Closures can be used to implement mixins in JS.
// 10. Closures can be used to implement callbacks and higher order functions in JS.

// Disadvantages of Closure
// 1. Closures can lead to memory leaks.
// 2. Closures can make code hard to understand.
// 3. Closures can create performance issues.
// 4. Closures can create security issues.
// 5. Closures can create maintainability issues.
// 6. Closures can create garbage collection issues.
// 7. Closures can create encapsulation issues.
// 8. Closures can create memory consumption issues.

// 
// function createBase(num){
//     var temp = num;
//     return function(num2){
//         console.log(temp+num2)
//     }
// }

// var addSix= createBase(6); 
// addSix(10);
// addSix(21)

function myMemoize(fn){
    var res={}
    return function cal(...arg){
        let temp= JSON.stringify(arg);
        if(!res[temp]){
            res[temp]=fn(...arg)
        }
        return res[temp];
    }

}
function fn(a,b){
    for(let i=0;i<100000;i++){}
    return a+b;

}
const run= myMemoize(fn);

console.time("Start first");
console.log(run(5,6));
console.timeEnd("Start first")
console.time('Start second');
console.log(run(5,6));
console.timeEnd('Start second')
console.time('Start second');
console.log(run(5,8));
console.timeEnd('Start second')
console.time('Start second');
console.log(run(5,8));
console.timeEnd('Start second')
