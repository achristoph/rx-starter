import Rx = require('@reactivex/rxjs');

const numObservable = Rx.Observable.interval(1000).take(3);

const higherOrderObservable = numObservable.map(x => Rx.Observable.of(1, 2));

// nested subscription
// leak prone, and inner subscription returns for unsubscription are not kept
// higherOrderObservable
//   .subscribe(obs =>
//     obs.subscribe(x => console.log(x))
//   );

// flattening: Observable<Observable<T>> --> Observable<T>
// switch operator - it will unsubscribe previous inner observable
higherOrderObservable.switch()
  .subscribe(x => console.log(x));
