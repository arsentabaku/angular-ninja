import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-promise-vs-observable',
  templateUrl: './promise-vs-observable.component.html',
})
export class PromiseVsObservableComponent implements OnInit, OnDestroy {
  myPromise: any;
  myObservable: any;
  subscription: any;

  constructor() {}

  ngOnInit(): void {
    this.promiseExample();
    this.observableExample();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  promiseExample(): void {
    this.myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('dog');
        resolve('cat');
        resolve('bird');
      }, 1000);
    });

    this.myPromise.then((result: any) => {
      console.log('Promise: ', result);
    });
  }

  observableExample(): void {
    this.myObservable = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
      }, 1000);
    });

    this.subscription = this.myObservable
      // .pipe(
      //   filter((data: string) => {
      //     return data === 'cat';
      //   })
      // )
      .subscribe((result: any) => {
        console.log('Observable: ', result);
      });
  }
}
