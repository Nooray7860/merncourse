const person = {
  name: "shoffi",
  age: 23,
  dob: "oct 28 2000",
};

person["gender"] = "F";
person.religion = "islam";
person.nationality = "pakistani";

// console.log(person);

// Methods: keys, values, entries

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

const check = Object.entries(person);
// console.log(check[0][1]);

const { name, age } = person;
console.log(name, age);
