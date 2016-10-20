import Rx = require('@reactivex/rxjs');

var data = Rx.Observable.interval(500).take(5)
  .zip(Rx.Observable.of('a', 'b', 'a', 'a', 'b'), (x, y) => y);

var flusher = Rx.Observable.interval(1000).take(1).concat(Rx.Observable.never());

/*
--a--b--a--a--b|
   distinctUntilChanged
--a--b--a-----b|
*/
var result = data.distinct(); // only emit distinct for all values - there's buffer
var result = data.distinctUntilChanged();
result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);

