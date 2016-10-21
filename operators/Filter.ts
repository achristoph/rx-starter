import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(1000).take(5);

/*
--0--1--2--3--4--5--6--7-
 filter(x => x % 2 === 0)
--0-----2-----4-----6----
*/

var result = foo.filter(x => x % 2 === 0);

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
