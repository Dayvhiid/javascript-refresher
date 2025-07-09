const nums = [2, 4, 6, 8];
const squares = nums.map(num => num*num);
console.log(squares);

//return name with length greater than 4
const names = ["Dan", "Sarah", "Eve", "Jonathan"];
console.log(names.filter(name => name.length > 4));

//return the total price.
const prices = [100, 50, 25];
const total = prices.reduce((arr,curr) => arr + curr,0);
console.log(total);


const users = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Alice" }
];
console.log(users.find(person => person.name === "Alice"));


//From the array below: Filter users aged 18+ Return a list of their names in uppercase

const people = [
  { name: "David", age: 20 },
  { name: "Jane", age: 17 },
  { name: "Sarah", age: 22 }
];
const filterPeople = people.filter(person => person.age >= 18);
const list = filterPeople.map(person => person.name.toUpperCase());
console.log(list);