// map, filter,reduce
// what is High order function
// A function that takes a function as an argument or returns a function as a result is called a higher-order function.
//  A higher-order function is a function that takes a function as an argument, or returns a function.
// map , filter, reduce are the higher order function


//  what is map() in js
//  map() method creates a new array with the results of calling a function for every array element.
//  map() method calls the provided function once for each element in an array, in order.
//  map() does not execute the function for array elements without values.
//  map() does not change the original array.
//  syntax
//  array.map(function(currentValue, index, arr), thisValue)
//  currentValue	Required. The value of the current element
//  map vs forEach
//  map() method returns a new Array of elements. forEach() method doesn’t return anything (undefined).
//  map() method calls the provided function once for each element in an array, in order. forEach() method executes the provided function once for each array element in ascending order.
// Custon  map implementation

Array.prototype.customMap = function (callback) {
    var res = [];
    for(let i=0 ;i <this.length;i++){
        res.push(callback(this[i],i,this))
    }
    return res;
}
var arr= [1,2,3,4,5,6];
console.log('custom map')
console.log(arr.customMap((num,i)=>num*2+i))



// what is filter() in js
// filter() method creates a new array with array elements that passes a test.
// filter() does not execute the function for array elements without values.
// filter() does not change the original array.
// syntax   
// array.filter(function(currentValue, index, arr), thisValue)
// currentValue	Required. The value of the current element

//  filter implementation
function customfilter(arr,func){
    var result= [];
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            result.push(func(arr[i]));
        }
    }

    return result;
}
var arr= [1,2,3,4,5,6]

const out= customfilter(arr,(num) =>{
    if(num%2==0){
        return num;
    }
})
console.log(out)
//  what is reduce() in js
//  reduce() method runs a function on each array element to produce (reduce it to) a single value.
//  reduce() does not execute the function for array elements without values.
//  reduce() does not change the original array.
//  syntax
//  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//  total	Required. The initialValue, or the previously returned value of the function
//  currentValue	Required. The value of the current element

