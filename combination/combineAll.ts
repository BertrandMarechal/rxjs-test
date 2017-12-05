import * as Rx from 'rxjs/Rx';

//emits every sec
const obsStrings = Rx.Observable
  .interval(1000)
  .map(x => 'String' + x)
  .take(4);
//emits 100ms, and takes the value of the inner one
const obsCombination = obsStrings.map(x =>
  Rx.Observable.interval(100)
    .map(y => 'y: ' + y + ' - x: ' + x )
    .take(5)
);

const combined = obsCombination.combineAll();
//waits for the inner to finish, the does the outer
const subscribe = combined.subscribe(val => console.log(val));
