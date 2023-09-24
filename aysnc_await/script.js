const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data...')
    }, 10000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data...')
    }, 20000);
})
async function getData() {
    console.log('Hello World')
    const d = new Date;
    const start = d.getTime()
    console.log(start)
    const val1 = await p1;
    console.log(val1)
    console.log('Api call done 1')
    const e = new Date;
    console.log(e - start)

    const val2 = await p2;
    console.log(val2)
    console.log('Api call done 2')
    const e2 = new Date;
    console.log(e2 - start)

}

// function notPromise(){
//     console.log('i am out side promise');

// }
getData();
// notPromise();
