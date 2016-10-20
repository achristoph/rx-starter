// Debounce is useful in scenarios where we have events that are emitting too fast
// and we do not want all of them but the last one to be emitted
/*
--0--1--2--3--4|
  debounceTime(1000) - event silence
-----------------------4|
*/
// http://reactivex.io/documentation/operators/debounce.html
// https://jsbin.com/gocaqax/edit?js,output

import Rx = require('@reactivex/rxjs');

var data = Rx.Observable.interval(100).take(5);

var result = data.debounceTime(50);
// var result = data.debounce(
//   (x) =>
//   {
//     // console.log(x);
//     return Rx.Observable.interval(1000).take(1);
//   }

// );

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
