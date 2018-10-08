const person = {
  name: "Emma",
  age: 23,
  location: {
      city: "Hohenfels",
      temp: 40
  }
};

// const name = person.name;
// const age = person.age;

const {name, age} = person;

console.log(`${name} is ${age}.`);