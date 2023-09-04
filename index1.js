//  file number 1

// Given a string, reverse each word in the sentence
// var string = "Welcome to this Javascript Guide!";
// console.log(string)
// var ans=string.split(' ').reverse().join(' ');
// console.log(ans)

// Sort object by name;
var obj = [
    {
        name: 'amit',
        age: 23
    },
    {
        name: 'sachine',
        age: 25
    },
    {
        name: 'arun',
        age: 2
    },
    {
        name: 'jhon',
        age: 40
    }
]
obj.sort((a,b)=>{
    if(a.name > b.name){
        return 1;
    }
   return -1;
})
console.log(obj)

//  slice in es6
// slice method is used to copy the array
// var arr = [3, 4, 5, 6, 7, 8, 9, 10];
// var ans = arr.slice(0, 3);
// console.log(ans)

//  flatten array
function flattenArray(arr) {
    
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), [])
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray));
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator)
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);