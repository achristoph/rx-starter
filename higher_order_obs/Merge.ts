import Rx = require('@reactivex/rxjs');

const numObservable = Rx.Observable.interval(1000).take(3);

const higherOrderObservable = numObservable.map(x => Rx.Observable.of(1, 2));

// flattening: Observable<Observable<T>> --> Observable<T>
// merge operator - it will merge running inner observable concurrently
higherOrderObservable.mergeAll()
  .subscribe(x => console.log(x));
