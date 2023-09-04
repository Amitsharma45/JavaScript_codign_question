//Create a function fetchData that fetches data from a URL using the Fetch API and returns a Promise that resolves with the fetched data. Handle errors by rejecting the Promise with an error message
const fetchData = () =>{
    return new Promise((resolve, reject)=>{
      fetch('https://dummyjson.com/products/1').then((data)=>{
          return data.json();
      }).then((res)=>{
          resolve(res);
          console.log(res)
      }).catch((err)=>{
          reject(err)
      })
    })
  }
  // fetchData();
  
  const Delay = (del) =>{
     return new Promise((resolve, reject)=>{
       setTimeout(resolve,del)
  })
  }
  // Delay(5000).then(()=> console.log("promise resolve"))
  
  const asyncOne = () =>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve("first function resolve")
          },100);
      })
  }
  
  const asyncTwo = () =>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve("second function resolve")
          },200);
      })
  }
  
  const array = [asyncOne,asyncTwo];
  
  const result = async (arr) =>{
     
          let temp = [];
          for(const item of arr){
              temp.push(await item());
          }
          return temp;
  }
  // result(array).then((data)=>{
  //     console.log(data);
  // });
  
  const fetchMultipleUrls =  (urls) => {
      return new Promise((resolve, reject)=>{
        const promises = urls.map((i)=> fetch(i).then(res => res.json()));
        Promise.all(promises).then((data)=>{
          resolve(data);
        }).catch(err => {
          reject(err)
        })
      })
  }
  // const API1= `https://jsonplaceholder.typicode.com/todos/1`;
  // const API2 = 'https://dummyjson.com/products/1';
  // const urlArr = [API1, API2];
  // fetchMultipleUrls(urlArr).then((data)=>{
  //     console.log("then...")
  //     console.log(data);
  // }).catch((err)=>{
  //     console.log(err);
  // })
  
  //Asunc functions and exctution order
  
  const resolveAfter2Second = () =>{
      console.log("staring slow promise");
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve('slow');
              console.log("End slow promise");
          },4000)
      })
  }
  
  const resolveAfter1Second = () =>{
      console.log("staring fast promise");
      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve('fast');
              console.log("end fast promise")
          },2000)
      })
  }
  
  // const sequentialStart =  async () =>{
  //   console.log("sequential start");
  //   // 1. Start a timer, log after it's done
  //   const slow = resolveAfter2Second();
  //   console.log(await slow);
  
  //     // 2. Start the next timer after waiting for the previous one
  
  //     const fast = resolveAfter1Second();
  //     console.log(await fast);
  
  // console.log("sequential end")
  // }
  
  // sequentialStart();
  
  const notWait = async () =>{
      console.log("== sequentialWait starts ==");
       // 1. Start two timers without waiting for each other
      const slow = resolveAfter2Second();
      const fast = resolveAfter1Second();
  
       // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast)
  }
  notWait()