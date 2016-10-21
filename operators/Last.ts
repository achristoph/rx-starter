import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(1000).take(5);

/*
--0--1--2--3--4--5--6--7-...
         take(5)
--0--1--2--3--4|    (foo)
    last()
--------------4|  (bar)
*/
/*
--0--1--2--3--4|    (foo)
    takeLast()
-----------34|  (bar)
*/
var result = foo.last();
var result = foo.takeLast(2);

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
