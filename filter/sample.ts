import * as Rx from 'rxjs/Rx';

Rx.Observable
  .interval(330)
  .take(10)
  .sample(Rx.Observable.interval(1000))
  .subscribe(x => console.log(x));
