//  AsyncSubject is similar to the Replay and Behavior subjects, however it will only store the last value, and only publish it when the sequence is completed
import Rx = require('@reactivex/rxjs');
var subject = new Rx.AsyncSubject();

var i = 0;
var handle = setInterval(function () {
    subject.next(i);
    if (++i > 3) {
        subject.complete();
        clearInterval(handle);
    }
}, 500);

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });
