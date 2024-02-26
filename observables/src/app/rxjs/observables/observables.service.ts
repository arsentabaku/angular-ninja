import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ObservablesService {
  event = new Observable((subscriber) => {
    subscriber.next('Observable (automatic) 1/1');
    subscriber.next('Observable (automatic) 1/2');
    subscriber.next('Observable (automatic) 1/3');
    setTimeout(() => {
      subscriber.next('Observable (automatic) 1/4');
      subscriber.complete();
    }, 1000);
  });

  constructor() {}
}
