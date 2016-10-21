import Rx = require('@reactivex/rxjs');

var data1 = Rx.Observable.interval(500)
  .zip(Rx.Observable.of('a', 'b', 'c', 'd', '1'), (x, y) => y);

var data2 = data1.map((x: string) => {
  if (x === '1') {
    throw Error('not a letter!');
  } else {
    return x;
  }
});

/*
--a--b--c--d--2|     (data1)
map(toUpperCase)
--A--B--C--D--#      (data2)
 retryWhen - gets error then convert to next, then emit it in error observable
--A--B--C--D-----------A--B--C--D-------------A--B--C--D---
*/
// var result = data2.retry(1);
var invoked = 0;
var result = data2.retryWhen((errorObs: Rx.Observable<any>) => {
  return errorObs.delay(1000).map((e: Error) => {
    if (++invoked === 2) {
      throw `Retried 2 times!: ${e.message}`;
    }
  });
});
result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
