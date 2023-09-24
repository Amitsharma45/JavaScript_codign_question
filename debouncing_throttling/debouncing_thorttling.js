// what is debouncing in javascript?
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
// example


// What is throttling in javascript?
// Throttling is a technique in which, no matter how m any times the user fires the event, the attached function will be executed only once in a given time interval.
// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.


// debouncing implementation
// const inputbox = document.getElementById('debounce');

// function debounceFun(fn, time) {
//     let timeout;
//     return function(...args){
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(() => {
//             fn(args)
//         }, time);
//     }
// }
// const d=debounceFun((...args) => {
//     console.log('eventtaiger', args[0]);
// }, 500)



// throttling implementataion

const pass = document.querySelector('.pass');
const event = document.querySelector('.event');
const btn = document.getElementById('btn');

let passbtn=0;
let eventbtn=0;
const start = new Date().getTime();
console.log(start)
const myThrottling= (fn,time)=>{
    let startTeime=0;
    return function(...args){
        let now = new Date().getTime();
        if(now - startTeime < time) return;
        startTeime=now;
        fn(now)

    }
} 

function func(now){
    event.innerHTML=++eventbtn;
    console.log(now-start);
}

const throt= myThrottling(func,1000)

btn.addEventListener('click', () => {
    pass.innerHTML=++passbtn;
    throt('hi');
})

