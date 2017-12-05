import * as Rx from 'rxjs/Rx';

const obs = Rx.Observable.interval(100);
const obsTakeWhile = obs.takeWhile(x => x < 12);
const subTakeWhile = obsTakeWhile.subscribe(x => console.log(x));
