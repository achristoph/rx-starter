import Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.interval(200).take(4);
var foo2 = Rx.Observable.interval(300).take(4);
var more = Rx.Observable.of(4, 5, 6, 7, 8);
/*
foo: ---0---1---2---3--...
      do(x => console.log('before ' + x))
     ---0---1---2---3--...
       map(x => x * 2)
     ---0---2---4---6--...
      do(x => console.log('after ' + x))
     ---0---2---4---6--...
*/

// do is useful for debugging purpose
// map is transformation operator
// var bar = foo
//     .do(x => console.log('before ' + x))
//     .map(x => x * 2)
//     .do(x => console.log('after ' + x));
// var bar = foo.concat(more);
// var bar = foo.startWith(1);
// var bar = foo.merge(foo2); Or style
var bar = Rx.Observable.combineLatest(foo, foo2); // And style

// bar.subscribe(
//     (x) => console.log('next ' + x),
//     (err) => console.log('error ' + err),
//     () => console.log('done')
// );

//filter, take, first, skip
//takeLast, last

// var combined = foo.withLatestFrom(foo2); // And style

// var result = foo.scan((acc,x)=> acc+x, '');
// var result = foo.bufferCount(2);
// var result = foo.delay(1000);
var result = foo.delayWhen(x=>Rx.Observable.interval(x*100).take(1));
result.subscribe((x)=>console.log(x));