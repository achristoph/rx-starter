import Rx = require('@reactivex/rxjs');

var data1 = Rx.Observable.interval(500)
  .zip(Rx.Observable.of('a', 'b', 'c', 'd'), (x, y) => y);

var data2 = data1.map(x => x.toUpperCase());

/*
--a--b--c--d|     (data1)
map(toUpperCase)
--A--B--C--D|      (data2)
 repeat
--A--B--C--D--A--B--C--D--A--B--C--D|
*/

var result = data2.repeat(2);
result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
