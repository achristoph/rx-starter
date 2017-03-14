import Rx = require('@reactivex/rxjs');

var source = Rx.Observable.interval(1000);

var subscription = source.sampleTime(5000).subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });
