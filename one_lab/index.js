// return object which contains friqueny of all element
// let str='sdsfscsaawewre2323';
// let ans = {}
// for(let i in str){
//     if(ans[str[i]]){
//         ans[str[i]]++;
//     }else{
//         ans[str[i]]=1;
//     }
// }
// console.log(ans)

// sort obj by name
// let obj = [{
//     name: 'arun',
//     age: 22
// }, {
//     name: 'sachin',
//     age: 1
// }
//     , {
//     name: 'aa',
//     age: 50
// }
// ]
// obj.sort((a,b)=>{
//     if(a.age>b.age){
//         return 1;
//     }else{
//         return -1;
//     }

// })
// console.log(obj)

// check number is prime or not

// function primeCheck(num){
//     for(let i =2 ;i<Math.sqrt(num);i++){
//         if(num%1==0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(primeCheck(5));
// console.log(primeCheck(55));
// console.log(primeCheck(3));

// Check number is paridong
// let str='Hello i am Js coding';
// console.log(str.split(' ').reverse().join(' '))

// let arr= [232,33,1212,4,2,3];
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))


// function curr(a){
//     return function y(b){
//         if(b){
//             return curr(a+b);
//         }
//         return a;
//     }

// }

// console.log(curr(1)(3)(5)(2)())

// function convertObj(arr) {
//     let ans = {}
//     arr.forEach((item)=> {
//         for (let j in item) {
//             if (ans[j]) {
//                 ans[j]+=item[j];
//             } else {
//                 ans[j] = item[j];
//             }
//         }
//     })
//     return ans;

// }

// const fruitArray = [{ banana: 5, apples: 5 }, { pear: 6 }, { apples: 5 }, { banana: 2 }];
// const result = convertObj(fruitArray);
// console.log(result)

// console.log(result); // Output: { banana: 7, apples: 10, pear: 6 }

// Can we use foreach in object?
// let obj = {
//     name: 'arun',
//     age: 22
// }
// obj.forEach((item)=>{
//     console.log(item)
// })
// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}