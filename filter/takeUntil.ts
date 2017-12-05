import * as Rx from 'rxjs/Rx';

const obsTimer = Rx.Observable.timer(1000);
const obsInterval = Rx.Observable.interval(100);
const obsTakeUntil = obsInterval.takeUntil(obsTimer);
const subTakeUntil = obsTakeUntil.subscribe(x => console.log(x));
