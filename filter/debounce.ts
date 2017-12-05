import * as Rx from 'rxjs/Rx';

const o1bs = Rx.Observable.interval(100).take(12);
const obsDebounce1 = o1bs.debounce(x => Rx.Observable.timer(200));
const subDebounce1 = obsDebounce1.subscribe(x => console.log('Deb1:' + x));



const obs2 = Rx.Observable.interval(200).take(4);
const obsDebounce2 = obs2.debounce(x => Rx.Observable.timer(150));
const subDebounce2 = obsDebounce2.subscribe(x => console.log('Deb2:' + x));
