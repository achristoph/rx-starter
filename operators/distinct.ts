import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500).take(5)
    .zip(Rx.Observable.of('a', 'b', 'a', 'a', 'b'), (x, y) => y);

/*
--a--b--a--a--b|
   distinctUntilChanged
--a--b--a-----b|
*/

var result = foo.distinctUntilChanged();

result.subscribe(
    (x) => console.log('next ' + x),
    (err) => console.log('error ' + err),
    () => console.log('done')
);
