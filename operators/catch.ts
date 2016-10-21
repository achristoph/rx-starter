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
--A--B--C--D--#      (bar)
catch(# => -Z|)
--A--B--C--D--Z|
*/

var result = data2.catch(error => Rx.Observable.of('Z'));
result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
