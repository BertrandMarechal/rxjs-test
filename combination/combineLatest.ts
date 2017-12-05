import * as Rx from 'rxjs/Rx';


const timerOne = Rx.Observable.timer(1000,4000);
const timerTwo = Rx.Observable.timer(2000,4000);
const timerThree = Rx.Observable.timer(3000,4000);
const combined = Rx.Observable
.combineLatest(
    timerOne,
    timerTwo,
    timerThree
);

const subscribe = combined.subscribe(latestValues => {
  const [timerValOne, timerValTwo, timerValThree] = latestValues;
  console.log(
    `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
   );
});


setTimeout(() => {
  subscribe.unsubscribe();
},10000);
