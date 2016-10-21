import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(500)
    .zip(Rx.Observable.of('a', 'b', 'c', 'd', {} as string), (x, y) => y);

var bar = foo.map((x:any) => x.toUpperCase());

/*
--a--b--c--d--2|     (foo)
map(toUpperCase)
--A--B--C--D--#      (bar)
catch(# => -Z|)
--A--B--C--D--Z|
*/

var result = bar.catch(error => Rx.Observable.of('Z'));
result.subscribe(
    (x) => console.log('next ' + x),
    (err) => console.log('error ' + err),
    () => console.log('done')
);