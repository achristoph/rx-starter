var Rx = require('rx');

var subject = new Rx.Subject();

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

subject.onNext(42);
subject.onNext(56);
