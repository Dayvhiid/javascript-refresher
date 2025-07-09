names = ["Dada", "David","Iyioluwa"];
names.forEach((name,index) => {
    console.log(`${index} ${name}`);
})

// const numbers = [1,2,3];
// const squares = numbers.map((num) => num*num);

const scores = [20,40,70,80,50];
console.log(scores.filter(score => score >50));


const users = [
    {name: "David", age:20},
    {name: "Iginig", age:32}
    ];
    
const user = users.find(person => person.name == "David");
console.log(user);


const numbers = [10,20,40,20,70,50];
console.log(numbers.reduce((acc,curr) => acc + curr,0));

const ages = [10,20,30,40,50];
console.log(ages.some(age => age >= 50));
console.log(ages.every(age => age >= 50))

console.log(numbers.sort((a,b) => a-b));