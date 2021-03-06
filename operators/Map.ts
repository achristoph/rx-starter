import Rx = require('@reactivex/rxjs');

var data = Rx.Observable.interval(1000).take(3);
/*
data: ---0---1---2---3--...
       map(x => x / 2)
result: ---0---2---4---6--...
*/
var result = data.map(x => x * 2);
// var result = data.mapTo(1); // map to a constant value
result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);
