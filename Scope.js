// Scope in JS
// Scope is the current context of the code which is executing
// Var is function scoped
// Let is block scoped
// Const is block scoped


// let a = 10;
// var b = 20;
// function abc() {
//     var a = 30;
//     let b = 40;
//     console.log(a)
//     console.log(b)
// }
// abc()
// console.log(a)
// console.log(b)

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }

// for (var i = 0; i < 5; i++) {
//     function abc(t) {
//         setTimeout(() => {
//             console.log(t)
//         }, 1000 * i)
//     }
//     abc(i)
// }