import * as Rx from 'rxjs/Rx';

Rx.Observable
  .interval(100)
  .take(5)
  .debounceTime(200)
  .subscribe(x => console.log('DebTime1:' + x));


  Rx.Observable
    .interval(200)
    .take(5)
    .debounceTime(100)
    .subscribe(x => console.log('DebTime2:' + x));
