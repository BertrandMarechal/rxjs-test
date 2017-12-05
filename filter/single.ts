import * as Rx from 'rxjs/Rx';

Rx.Observable
  .interval(100)
  .take(10)
  .single(x => x === 5)
  .subscribe(x => console.log(x));
