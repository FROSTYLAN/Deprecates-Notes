const promise = new Promise(function (resolve, reject) {
  resolve("Hey!");
});

const cows = 152;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm.`);
  } else {
    reject(`There is no cows on the farm.`);
  }
});

countCows
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
