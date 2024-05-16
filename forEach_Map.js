const array = [1, 2, 3, 4, 5, 6];

//map return and add those return values into the array
const a = array.map((item, index, arr) => {
  item = item * item;
  return item;
});

//does not return any value
array.forEach((item, index, arr) => {
  item = item * item;
  return item;
});

console.log("return ", a);
console.log("actual ", array);
