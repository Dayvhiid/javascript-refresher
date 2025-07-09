function testScope() {
  if (true) {
    var a = 5;
    let b = 10;
    const c = 15;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}


const multiply = (a,b) => {
    return a*b;
}


const greet = (name) => {
   return "Hello" + name;
}
const user = {name: "John", age: 30};
user.age = 40;

// a = 5, b = undefined, c = undefined


const getData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const success = false;
            if (success){
                resolve("Data Loaded")
            } else {
                reject("Error Message")
            }
        }, 1000)
    })
}

getData().catch(result => console.log(result));



const data = () => {
     return new Promise((resolve) => {
          resolve("Fetched with async/await")
     }, 1000);
};

const fetchData = async () => {
    try{
        const result = await data;
        console.log(result);
    }catch(error){
        console.error("something went wrong", error);
    }
}
fetchData();


const status = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Complete");
        }, 2000);
    });
}


const fetchUsers = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data.title);
      }catch(error){
          console.error("Unexpected Error", error);
      }
} 