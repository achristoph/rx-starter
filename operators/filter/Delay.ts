import Rx = require('@reactivex/rxjs');
// Delay can be useful for animation or communication with server when there's certain delay needed
var data = Rx.Observable.interval(100).take(5);

/*
--0--1--2--3--4|
 delayWhen(x => -----0|)
--------0--1--2--3--4|
*/

// delay(1000)
// using
var futureDate = new Date(new Date().getTime() + 1000);
var result = data.delay(futureDate);
var result = data.delayWhen(x =>
  Rx.Observable.interval(1000).take(1)
  // delayWhen gives the emitted value argument
  //e.g: Rx.Observable.interval(x*1000).take(1)
);

result.subscribe(
  (x) => console.log(`next: ${x}`),
  (e) => console.log(`error: ${e}`),
  () => console.log(`done!`)
);

