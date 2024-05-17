// const promise1 = new Promise((res, rej) => {
//   const a = 1;

//   a % 2 == 0 ? res("even") : rej("odd");
// });

// promise1
//   .then((value) => {
//     //then is a key word for resolve
//     console.log(value);
//   })
//   .catch((value) => {
//     //catch is a key word for reject
//     console.log(value);
//   })
//   .finally(() => {
//     //finnaly will for both res and rej case
//     console.log("finally");
//   });

const promise1 = new Promise((res) => {
  //it takes time in ms, 1 sec = 1000 ms
  setTimeout(() => {
    res(new Date());
  }, 1000);
});

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res(new Date());
  }, 2000);
});

const promise3 = new Promise((res) => {
  setTimeout(() => {
    res(new Date());
  }, 3000);
});

const promise4 = new Promise((res) => {
  setTimeout(() => {
    res(new Date());
  }, 4000);
});

const main = async () => {
  await promise1.then((value) => {
    //then is a key word for resolve
    console.log(value);
  });
  await promise2.then((value) => {
    //then is a key word for resolve
    console.log(value);
  });
  await promise3.then((value) => {
    //then is a key word for resolve
    console.log(value);
  });
  await promise4.then((value) => {
    //then is a key word for resolve
    console.log(value);
  });
};

main();

// create a infinite promise printing time after each second
// it be using promise and async await
// hint you have to create new promise for each second
// hint dont add plus 1000ms/1sec in set time out
// no need to create any loop hence recursive function is a thing :))
