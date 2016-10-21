import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.of('h', 'e', 'l', 'l', 'o');
var bar = Rx.Observable.interval(400).take(5);

/*
(hello|)                  (foo)
---0---1---2---3---4|     (bar)
  zip((x,y) => x)
---h---e---l---l---o|
*/

// First of foo + First of bar => First of output
// Second of foo + Second of bar => Second of output
// ...
// n-th of foo + n-th of bar => n-th of output

// AND-style:
// combineLatest
// withLatestFrom
// zip

var result = Rx.Observable.zip(foo, bar, (x,y) => x);

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);

