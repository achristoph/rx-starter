// ReplaySubject stores all the values that it has published. Therefore, when you subscribe to it, you automatically receive an entire history of values 
// that it has published, even though your subscription might have come in after certain values have been pushed out
var Rx = require('rx');

var subject = new Rx.ReplaySubject(2 /* buffer size */);

subject.onNext('a');
subject.onNext('b');
subject.onNext('c');

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

subject.onNext('d');
// => Next: d
