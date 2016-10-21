var foo = Rx.Observable.interval(500)
  .zip(Rx.Observable.of('a', 'b', 'c', 'd'), (x, y) => y);

var bar = foo.map(x => x.toUpperCase());

/*
--a--b--c--d|     (foo)
map(toUpperCase)
--A--B--C--D|      (bar)
 repeat
--A--B--C--D--A--B--C--D--A--B--C--D|
*/

var result = bar.repeat(3);
result.subscribe(
  (x) => console.log('next ' + x),
  (err) => console.log('error ' + err),
  () => console.log('done')
);
