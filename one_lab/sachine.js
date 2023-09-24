//remove duplicate element from array [1,2,3,5,3,2,1,4] = [1,2,3,5,4]
var arr = [1, 2, 3, 5, 3, 2, 1, 4];
var res = arr.filter((item, index) => { return arr.indexOf(item) == index });
console.log(res);

//find length of array without using length keyword
var a = [1, 2, 3, 4, 5, 6, 7];
let length = 0;
while (a[length] !== undefined) {
    length++;
}
console.log(length);

//find unique element in array
//same logic can be used to find duplicate
var arr = [1, 2, 3, 4, 4, 4, 1, 2];
var fq = {};
var res = -1;
for (let i = 0; i < arr.length; i++) {
    if (fq[arr[i]] !== undefined) {
        fq[arr[i]] = fq[arr[i]] + 1;
    }
    else {
        fq[arr[i]] = 1;
    }
}
for (const key in fq) {
    if (fq[key] <= 1) {
        res = key;
        break;
    }
}
console.log(res);

//forEach method in javascript

//total sum
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
numbers.forEach(totalSum);
function totalSum(item, index, arr) {
    sum += item;
}
console.log(sum);

//count occurence of element in array
var arr = [1, 2, 3, 4, 4, 4, 1, 2];
var fq = {};
arr.forEach((item, index, array) => {
    if (fq[item]) {
        fq[item] += 1;
    }
    else {
        fq[item] = 1;
    }
})
console.log(fq);

//map method in js
// to return the object from arrow function

var products = [{
    name: 'lapotop',
    count: 3,
    price: 10000
}, {
    name: 'Phone',
    count: 99,
    price: 1000
}]

let pr = products.map((item) =>
({
    name: item.name,
    total: (item.count * item.price)
})

)
console.log(pr);

//flatten a nested array
var arr = [1, 2, 3, [4, 5, 6], [[5, 1]]];
var res = [];
function flattenArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == undefined) {
            res.push(arr[i])
        }
        else {
            flattenArray(arr[i]);
        }
    }
}
flattenArray(arr);
console.log(res);
//or
console.log(arr.flat(Infinity));

//reduce method (find max and sum)
var arr = [1, 2, 3, 4, 444, 5, 5, 55555];

var sumOfArray = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
})
var maxNum = arr.reduce((acc, curr) => {
    acc = (acc > curr) ? acc : curr;
    return acc;
})
console.log("sum Of array " + sumOfArray);
console.log(" maximum number " + maxNum);

// reduce method on object in js
var users = [{ name: 'sachin', age: 23 }, { name: 'aditya', age: 23 }, { name: 'trishant', age: 26 }, 
{ name: 'ashu', age: 26 }, { name: 'ankur', age: 23 }, { name: 'push', age: 30 }, { name: 'sagar', age: 20 }]

var ageGroup = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = acc[curr.age] + 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(ageGroup)

//chaining of map and reduce
var arr = [{ name: 'sachin', age: 23 }, { name: 'aditya', age: 23 }, { name: 'trishant', age: 26 },
 { name: 'ashu', age: 26 }, { name: 'ankur', age: 23 }, { name: 'push', age: 30 }, { name: 'sagar', age: 20 }]

var res = arr.filter((user) => {
    if (user.age >= 20 && user.age < 25) {
        return user;
    }
}).map((item) => { return item.name });
console.log(res);