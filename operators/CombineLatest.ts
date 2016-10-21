import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500).take(4);
var bar = Rx.Observable.interval(300).take(5);

/*
----0----1----2----(3|)     (weight)
--0--1--2--3--(4|)          (height)
   combineLatest((x, y) => x+y)
----01--23-4--(56)-(7|)
*/

var bmi = foo.combineLatest(bar,(x,y) => x+y);

// merge: OR
// combineLatest: AND

bmi.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);

