import Rx = require('@reactivex/rxjs');
var fetch = require('node-fetch');

var streamA = Rx.Observable.of(1, 2, 3);
var streamB = streamA.map(a => 10 * a);

streamB.subscribe(b => console.log(b));

var requestStream = Rx.Observable.of('https://api.github.com/users');
// Option 1
// Two subscribe calls
requestStream.subscribe(requestUrl => {
    var responseStream = Rx.Observable.fromPromise(fetch(requestUrl));
    responseStream.subscribe((response: any) => {
        response.json().then((r) => console.log(r));
    });
});

// Option 2
// One subscribe call only
var responseStream = requestStream.flatMap(requestUrl => {
    return Rx.Observable.fromPromise(fetch(requestUrl));
}).subscribe((response: any) => {
    response.json().then((r) => console.log(r));
});
