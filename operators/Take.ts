import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(100);

/*
--0--1--2--3--4--5--6--7-
         first
--0--|
*/
/*
--0--1--2--3--4--5--6--7-
         take(5)
--0--1--2--3--4----------
*/
/*
--0--1--2--3--4--5--6--7-
         skip(5)
-----------------5--6--7-
*/

var result = foo.take(5)
var result = foo.skip(5)
var result = foo.first();

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
