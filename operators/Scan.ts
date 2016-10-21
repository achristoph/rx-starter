import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.of('h', 'e', 'l', 'l', 'o');
var bar = Rx.Observable.interval(600).take(5);

/*
(hello|)                          (foo)
-----0-----1-----2-----3-----4|   (bar)
       zip((x,y) => x)
-----h-----e-----l-----l-----o|
  scan((acc, x) => acc+x, '')
-----h-----(he)--(hel)-(hell)(hello|)
*/

var result = foo.zip(bar, (x,y) => x).scan((acc, x) => acc+x, '');
// var result = foo.zip(bar, (x,y) => x).reduce((acc, x) => acc+x, ''); // reduce emits only the final value

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
