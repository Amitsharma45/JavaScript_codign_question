// What is Promise in JS?
// Promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

// Adavantages of using Promise
// 1. Avoid callback hell
// 2. Better handling of asynchronous operations
// 3. Better flow of control definition in asynchronous logic
// 4. Better error handling
// 5. Better debugging

// Disadvantages of using Promise
// 1. Inability to cancel a promise once it's been called
// 2. If you forget to add a catch() to your promise chain, any errors that happen in your promise chain will be silently ignored.
// 3. Promise can only handle a single event. Once the event is resolved, it cannot be reused.

// Promise states
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.

// Promsie Chaining: Promise.prototype.then() and Promise.prototype.catch() methods
// 1. Promise.prototype.then(): appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).
// 2. Promise.prototype.catch(): appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.


// Promise methods or Promise combinators
// 1. Promise.all(iterable): returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first passed promise that rejects.
// Promise.all([promise1, promise2, promise3]).then((values) => { console.log(values); });
// 2. Promise.any(iterable): returns a single promise that resolves as soon as any of the promises in the iterable resolves, or rejects if all of the promises in the iterable reject.
// Promise.any([promise1, promise2, promise3]).then((value) => { console.log(value); });

// 3.  Promise.allSettled(iterable): returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// 4. Pormise.race (iterable): returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.


// Example 1:

const promise1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('I am resolced')
            }, 5000);

        } else {

            reject('I am rejected')
        }

    })
}
(
  async function(){
    console.log('start')
        const t= await promise1()
        console.log(t)
        console.log('end')
    }
)()