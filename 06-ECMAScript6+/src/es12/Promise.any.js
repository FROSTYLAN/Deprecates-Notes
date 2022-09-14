const promise1 = new Promise((res, rej) => rej("1"));
const promise2 = new Promise((res, rej) => res("2"));
const promise3 = new Promise((res, rej) => res("3"));

Promise.any([promise1, promise2, promise3]).then((res) => console.log(res));
