import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  map,
  filter,
  throttleTime,
  last,
  ignoreElements,
  count,
  every,
  findIndex,
  find,
  max,
  min,
  reduce,
} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions!: Subscription;
  customIntervalObservable: any;
  rounds: string[] = [];
  numberOfChars = 0;

  constructor() {}

  ngOnInit() {
    // this.subscriptions = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    this.customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 7) {
          observer.complete();
        }
        if (count > 7) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  printOnConsole(): void {
    console.log('Printed!');
  }

  observeRounds(): void {
    let observer = {
      next: (data: any) => {
        this.rounds.push(data);
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed!');
      },
    };

    this.subscriptions = this.customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        // find((data: number) => {
        //   return data % 2 === 0;
        // }),
        // min(),
        // count(),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }),
        // throttleTime(1500),
        // last(),
        // ignoreElements(),
      )
      .subscribe(observer);
  }
}
