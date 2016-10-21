import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500).take(4);
var prefix = Rx.Observable.of('a');

/*
--0--1--2--3--4--5--6--7-...
    take(4)
(a|)                      (prefix)
--0--1--2--3|             (foo)
   concat
a-0--1--2--3|
*/
var bar = prefix.concat(foo);
// var bar = foo.concat(more);
// var bar = foo.startWith(100);

bar.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
