//  Like ReplaySubject, except that it only stored the last value it published
var Rx = require('rx');
/* Initialize with initial value of 42 */
var subject = new Rx.BehaviorSubject(42);

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
// => Next: 42

subject.onNext(56);
// => Next: 56

subject.onCompleted();
// => Completed