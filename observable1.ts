import Rx = require('@reactivex/rxjs');
// A Function returns an immediate value whereas an Observable returns value(s) synchronously / asynchronously
// function foo() {
//   console.log('Hello');
//   return 42;
// }

// console.log('before');
// console.log(foo.call());
// console.log('after');

// Observable (PUSH)
// Producer determines when the values are sent
var bar = Rx.Observable.create(function (observer) {
  try {
    console.log('Hello');
    observer.next(42);
    observer.next(100);
    observer.next(200);
    observer.error(new Error('bad'));
    setTimeout(function () {
      observer.next(300);
      observer.complete();
    }, 1000);
  } catch (err) {
    observer.error(err);
  }
});

console.log('before');
bar.subscribe(function nextValueHandler(x) {
  console.log(x);
}, function errorHandler(err) {
  console.log('Something went wrong' + err);
});
console.log('after');


// Generator (PULL)
// Producer
function* baz() {
  console.log('Hello');
  yield 42;
  yield 100;
  yield 200;
}
// Consumer determines when the value are sent
var iterator = baz();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);