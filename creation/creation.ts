import * as Rx from 'rxjs/Rx';

//create an observable

const obsHello = Rx.Observable.create(function(observer) {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
  observer.next('How are you ?');
});

const subHello = obsHello.subscribe(val => console.log(val));
//displays Hello, world and stops

//creates an observable from the value passed in of
const obsOf = Rx.Observable.of('Of');
const subOf = obsOf.subscribe(val => console.log(val));

//takes the 5 first values of a counter that fires every 500ms
const obsInterval = Rx.Observable.interval(500).take(5);
const subInterval = obsInterval.subscribe(val => console.log(val));

//takes counts from 12 and emits 12+call
const obsRange = Rx.Observable.range(12,15);
const subRange = obsRange.subscribe(val => console.log(val));

//emits a value after 1 second, and then every subsequent 2 secs
const obsTimer = Rx.Observable.timer(1000, 2000);
const subTimer = obsTimer.subscribe(val => console.log( new Date() + ' ' + val));
setTimeout(() => {
  subTimer.unsubscribe();
},10000);


// const promPromise = (param) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('passed : ' + param);
//     },1000);
//   });
// }
// const obsPromise = Rx.Observable.fromPromise(promPromise('passing'));
// const subPromise = obsPromise.subscribe(val => console.log(val));
