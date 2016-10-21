var Rx = require('@reactivex/rxjs');

var foo = Rx.Observable.of(1, 2, 3, 4, 5);

function multiplyBy(multiplier) {
    var source = this;
    var result = Rx.Observable.create(function subscribe(observer) {
        source.subscribe(
            (x) => observer.next(x * multiplier),
            (e) => observer.error(e),
            () => observer.complete()
        );
    });
    return result;
}

Rx.Observable.prototype.multiplyBy = multiplyBy;

var bar = foo.multiplyBy(2);

bar.subscribe(
    (x) => console.log('next: ' + x),
    (e) => console.log(e),
    () => console.log('done')
);


