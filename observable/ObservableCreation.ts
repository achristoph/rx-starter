import Rx = require('@reactivex/rxjs');

var fetch = require('node-fetch');
var EventEmitter = require('events').EventEmitter;

var foo = Rx.Observable.create(function (observer) {
    observer.next(777);
    observer.complete();
});
foo.subscribe((e) => console.log(e));
var bar = Rx.Observable.of(42, 100, 200);
var bar1 = Rx.Observable.from([42, 100, 200]);
var bar2 = Rx.Observable.from(fetch('https://null.jsbin.com'));

function* generator(): any {
    yield 10;
    yield 20;
}
var iterator = generator();
var bar3 = Rx.Observable.from(iterator);

var eventEmitter = new EventEmitter();
var bar4 = Rx.Observable.fromEvent(eventEmitter, 'data')

bar.subscribe((e) => console.log(e));
bar1.subscribe((e) => console.log(e));
bar2.subscribe((e: any) => e.json().then((r) => console.log(r)));
bar3.subscribe((e) => console.log(e));
bar4.subscribe(function (data) {
    console.log('data: ' + data);
});
eventEmitter.emit('data', 'foo');

var bar5 = Rx.Observable.empty();
var bar6 = Rx.Observable.never();
var bar7 = Rx.Observable.throw(new Error('Wha!'));

bar5.subscribe(function (data) {
    console.log("bar5:" + data);
}, null, () => console.log('bar 5 done'))

bar7.subscribe(function (data) {
    console.log('bar 7');
}, (e) => console.log('bar 7:' + e));

var interval = Rx.Observable.interval(1000);
var timer = Rx.Observable.timer(2000, 1000);

var subscription = interval.subscribe((e)=>console.log(e));
setTimeout(()=>subscription.unsubscribe(), 3000);
