import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500).take(5)
  .zip(Rx.Observable.of('H', 'e', 'l', 'l', 'o'), (_, c) => c);
var bar = Rx.Observable.interval(300).take(7)
  .zip(Rx.Observable.of(0, 1, 0, 1, 0, 1, 0), (_, x) => x);

/*
----H----e----l----l----o|     (foo)
--0--1--0--1--0--1--0|         (bar)
  withLatestFrom((c,n) => n === 1 ? c.toUpperCase() : c.toLowerCase())
----h----e----L----L----o|
*/

var result = foo.withLatestFrom(bar, (c,n) => n === 1 ? c.toUpperCase() : c.toLowerCase());

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);

