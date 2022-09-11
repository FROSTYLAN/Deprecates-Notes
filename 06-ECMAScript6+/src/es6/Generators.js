function* helloWorld() {
  if (true) {
    yield "Hello,";
  }

  if (true) {
    yield "World!";
  }
}

const genHello = helloWorld();
console.log(genHello.next()); // { value: 'Hello,', done: false }
console.log(genHello.next()); // { value: 'World!', done: false }
console.log(genHello.next()); // { value: undefined, done: true }
