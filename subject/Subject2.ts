import Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(1000);

var subject = new Rx.Subject();

var subSource = source.subscribe(subject);

var subSubject1 = subject.subscribe(
    function (x) { console.log('Value published to observer #1: ' + x); },
    function (e) { console.log('onError: ' + e.message); },
    function () { console.log('onCompleted'); });

var subSubject2 = subject.subscribe(
    function (x) { console.log('Value published to observer #2: ' + x); },
    function (e) { console.log('onError: ' + e.message); },
    function () { console.log('onCompleted'); });

setTimeout(function () {
    subject.complete();
}, 5000);