//  Curring is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
//  In simple words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
//  It helps to avoid passing the same variable again and again in a function.
//  It is a process of decomposing a function that takes multiple arguments into one that takes a single argument.
//  It returns a new function that expects the next argument inline.

//  Example:
//  function add(a) {
//     return function(b) {
//        return a + b;
//     }
//  }
//  add(2)(3); // 5

// Why curring needed ?
// 1. It helps to avoid passing the same variable again and again in a function.
// 2. It helps to create a higher-order function.
// 3. It helps to re-use the existing function.
// 4. It helps to create a copy of the existing function.

console.log(3-3+"3");
// Infinte Curring 

function add(x){
    return function(y){
        if(y){
            return add(x+y);
        }
        return x;
    }
}

console.log(add(1)(2)(2)(3)(4)())

// Partial  Application
// Partial application is the process of fixing a number of arguments to a function, producing another function of smaller arity.
// It is a technique of evaluating function with fewer arguments, into sequence of function with multiple arguments.
// example
// function add(a, b, c) {
//     return a + b + c;
//  }
//  add(2, 3, 4); // 9

// Curring vs Partial Application
// Curring is a process of decomposing a function with multiple arguments into the sequence of function with single argument.
// Partial application is a process of fixing a number of arguments to a function, producing another function of smaller arity.
