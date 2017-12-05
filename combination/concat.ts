import * as Rx from 'rxjs/Rx';

const obsConcat1 = Rx.Observable.interval(100).map( x => `Timer 1 - Value ${x}`).take(5);
const obsConcat2 = Rx.Observable.interval(100).take(5).map( x => `Timer 2 - Value ${x}`);
const obsConcat3 = obsConcat1.concat(obsConcat2);

const subConcat = obsConcat3.subscribe(x => console.log(x));
