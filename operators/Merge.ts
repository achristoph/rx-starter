import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500).take(4);
var bar = Rx.Observable.interval(300).take(5);

/*
----0----1----2----(3|)     (foo)
--0--1--2--3--(4|)          (bar)
    merge
--0-01--21-3--(24)-(3|)
*/

var result = Rx.Observable.merge(foo, bar);

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
