function sumFruits(fruitArray) {
    // Initialize an empty object to store the sum of fruits
    const fruitSum = {};

    // Iterate through each object in the array
    fruitArray.forEach((fruitObj) => {
        // Iterate through the keys (fruit names) in each object
        for (const fruit in fruitObj) {
            // If the fruit already exists in the sum object, add the quantity
            if (fruitSum[fruit]) {
                fruitSum[fruit] += fruitObj[fruit];
            } else {
                // If the fruit doesn't exist, create a new entry
                fruitSum[fruit] = fruitObj[fruit];
            }
        }
    });

    return fruitSum;
}

// Example usage:
const fruitArray = [{ banana: 5, apples: 5 }, { pear: 6 }, { apples: 5 }, { banana: 2 }];
const result = sumFruits(fruitArray);
// console.log(result); // Output: { banana: 7, apples: 10, pear: 6 }

const numStr = '123456'
const digitArray = numStr.split('').map(Number);
// digitArray.forEach((digit, index) => {
//     digitArray[index] = digitArray[index] + 1
// })
const sumDigit = digitArray.reduce((acc, curr) => {
    return acc += curr
}, 0)
// console.log(digitArray, sumDigit);

const student = [
    { name: 'Amit', roolno: 45, marks: 99 },
    { name: 'Arun', roolno: 20, marks: 9 },
    { name: 'Anil', roolno: 99, marks: 45 },
    { name: 'Cc', roolno: 2, marks: 80 },

]

const res = student.map((stu)=>{
    if(stu.marks<60){
         stu.marks+=20;
    }
    return stu.marks
}).reduce((acc,curr)=>acc+curr,0)
console.log(res)