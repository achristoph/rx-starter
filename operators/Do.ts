import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(200).take(4);
var foo2 = Rx.Observable.interval(300).take(4);
/*
foo: ---0---1---2---3--...
      do(x => console.log('before ' + x))
     ---0---1---2---3--...
       map(x => x * 2)
     ---0---2---4---6--...
      do(x => console.log('after ' + x))
     ---0---2---4---6--...
*/
// implementation of do is equal to:
var x = foo.map((x) => x);
// do is useful for debugging purpose
// map is transformation operator
var result = foo
  .do(x => console.log('before ' + x))
  .map(x => x * 2)
  .do(x => console.log('after ' + x));

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
