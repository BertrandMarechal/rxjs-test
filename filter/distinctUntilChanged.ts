import * as Rx from 'rxjs/Rx';

Rx.Observable
  .interval(100)
  .take(50)
  .map(x => Math.floor(x/10))
  .distinctUntilChanged()
  .subscribe(x => console.log(x));
