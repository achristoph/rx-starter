import Rx = require('@reactivex/rxjs');

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

subject.next(42);
subject.next(56);
