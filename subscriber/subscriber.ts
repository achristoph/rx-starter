import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { Subscriber } from "rxjs";

const one = interval(1000).pipe(map(value => `one(${value})`));
const two = interval(2000).pipe(map(value => `two(${value})`));

const subscriber = new Subscriber<string>(value => console.log(value));
one.subscribe(subscriber);
two.subscribe(subscriber);
subscriber.unsubscribe();
