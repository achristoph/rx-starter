// ReplaySubject stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values 
// that it has published, even though your subscription might have come in after certain values have been pushed out
import Rx = require('@reactivex/rxjs');

var subject = new Rx.ReplaySubject(2 /* buffer size */);

subject.next('a');
subject.next('b');
subject.next('c');

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

// => Next: b
// => Next: c

subject.next('d');
// => Next: d
