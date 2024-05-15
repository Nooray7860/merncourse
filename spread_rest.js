//spread

let array1 = [1, 2, 3, 4, 5, [6, 7]];

// let array2 = [];
// for (let i = 0; i < 5; i++) {
//   array2[i] = array1[i];
// }

let array2 = [...array1];

array2[0] = "new value";

// console.log(array1);
// console.log(array2);

let person1 = {
  name: "shoffi",
  age: 23,
  dob: "oct 28 2000",
};

let person2 = { ...person1 };

//object

const check1 = (name, test) => {
  console.log(name);
  console.log(test);
};

let array = [1, 2, 3, 4, 5];

check1(...array);
