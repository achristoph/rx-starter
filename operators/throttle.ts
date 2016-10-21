import Rx = require('@reactivex/rxjs');
var foo = Rx.Observable.interval(500).take(5);

/*
--0--1--2--3--4|
  debounceTime(1000) // waits for silence, then emits
  throttleTime(1000) // first emits, then causes silence
--0-----2-----4|
*/

var result = foo.throttleTime(1000);

result.subscribe(
  (x)=>console.log('next ' + x),
  (err)=>console.log('error ' + err),
  ()=>console.log('done')
);
