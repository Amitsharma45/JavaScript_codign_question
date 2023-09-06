// Calling a function using call, apply and bind
// call() method is a predefined javascript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).
// apply() method is similar to call() method. The only difference is that the call() method takes arguments separately whereas the apply() method takes arguments as an array.
// bind() method is also similar to call() method. The only difference is that the call() method takes arguments separately whereas the apply() method takes arguments as an array.

//  Exmaple of call , apply and bind
// const data= {
//     name :'Amit',
//     age: 23
// }


// function printData(role,experience){
//     return 'hello '+ this.name+' age '+this.age+role+experience;

// }

// console.log(printData.call(data,' Mern stack developer',' 1 year'))
// console.log(printData.apply(data,['Mern stack developer','1 year']))

// const fun= printData.bind(data);
// console.log(fun('Front end Developer','5 years'))


// Call , apply wiht arrow funcion
const age = 20;
const arrowFun= {
    name:'Amit',
    age: 23,
    getAge: function(){
        console.log('i am Amits', this.age);
    },
    getArrow: ()=>{
        console.log('i am Amits', this.age);
    }
}
const data = {age:10};
arrowFun.getAge.call(data);
arrowFun.getArrow.call(data);

//  Interview Question
// Question 1

// const age = 20;
// const data = {age:10}

// const datafun= {
//     name:'Amit',
//     age: 23,
//     getAge: function(){
//         console.log('i am Amits', this.age);
//     }
// }

// datafun.getAge.call(data)


// Question 2
// Concat two array into a one array.

// const arr1=[1,2,3]
// const arr2= ['a','b','c']

// arr1.push.apply(arr1,arr2)

// console.log(arr1)

// Question 3
// fins min/max of array

// const arr1=[1,2,3,55,55]
// console.log(Math.max.apply(null,arr1))
// console.log(Math.min.apply(null,arr1))


// Question 4

// function checkPassword(success,failed){
//     const password= '420';
//     if(password== '420'){
//         success();
//     }else{
//         failed();
//     }

// }
// const data={
//     name:'Amit Sharma',

//     successRun:function (){
//         console.log(this.name, 'Login Succes');
//     },
//     failedRun: function (){
//         console.log(this.name, 'Login Failed');
//     }
// }

// const user={
//     name:'Amit Sharma',

//     login: function (result){
//         console.log(this.name+ (result?" Login Succes":" Logined Failed"))
//     }
// }

// checkPassword(user.login.bind(user,true),user.login.bind(user,false))

// checkPassword(data.successRun.bind(data),data.failedRun.bind(data));