import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(100).take(5);

/*
--0--1--2--3--4|
  debounceTime(1000) // delay
  debounce           // delayWhen
----0--1--2--3--4|
*/

// var result = foo.debounceTime(1000);

var result = foo.debounce(() =>
  Rx.Observable.interval(1000).take(1)
);

result.subscribe(
  (x)=>console.log('next ' + x),
  (err)=>console.log('error ' + err),
  ()=>console.log('done')
);
