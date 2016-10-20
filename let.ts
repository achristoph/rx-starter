import Rx = require('@reactivex/rxjs');
// const timerOne = Rx.Observable.timer(1000, 4000);
// timerOne.subscribe((e)=>console.log(e));

const myArray = [1,2,3,4,5];
const myObservableArray = Rx.Observable.from(myArray);
//demonstrating the difference between let and other operators
const test = myObservableArray
  .map(val => val + 1)
 .let(obs => obs.map(val => val + 2).filter(val => val % 2 === 0) )
  .subscribe(val => console.log('VALUE FROM ARRAY: ', val));
