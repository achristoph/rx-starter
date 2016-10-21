import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500)
  .zip(Rx.Observable.of('a', 'b', 'c', 'd', 2), (x, y) => y);

var bar = foo.map(x => x.toUpperCase());

/*
--a--b--c--d--2|     (foo)
map(toUpperCase)
--A--B--C--D--#      (bar)
 retryWhen
--A--B--C--D-----------A--B--C--D-------------A--B--C--D---
*/

var result = bar.retryWhen(errorObs => errorObs.delay(3000));
result.subscribe(
  (x) => console.log('next ' + x),
  (err) => console.log('error ' + err),
  () => console.log('done')
);
