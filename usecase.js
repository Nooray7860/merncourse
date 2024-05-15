//object

const check1 = ({ name, age }) => {
  console.log(name[0]);
  console.log(age);
};

const person = {
  name: ["shoffi", "hadia"],
  age: 23,
  dob: "oct 28 2000",
};

check1(person);
