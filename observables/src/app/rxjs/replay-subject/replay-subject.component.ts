import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReplaySubjectService } from './replay-subject.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
})
export class ReplaySubjectComponent implements OnInit {
  public title: string;
  public lastEvents: string[];
  private readonly subscriptionsToClear: Subscription;

  constructor(private replaySubjectService: ReplaySubjectService) {
    this.title = '__________';
    this.subscriptionsToClear = new Subscription();
    this.lastEvents = [];
  }

  ngOnInit(): void {
    this.replaySubjectService.event.next('ReplaySubject (automatic) 1/1');
    this.replaySubjectService.event.next('ReplaySubject (automatic) 1/2');
    this.replaySubjectService.event.next('ReplaySubject (automatic) 1/3');

    this.subscriptionsToClear.add(
      this.replaySubjectService.event.subscribe((result) => {
        this.lastEvents.push(result);
        console.log('1. ', result);
      })
    );

    this.replaySubjectService.event.next('ReplaySubject (automatic) 1/4');

    this.subscriptionsToClear.add(
      this.replaySubjectService.event.subscribe((result) => {
        this.lastEvents.push(result);
        console.log('2. ', result);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('ReplaySubject - Successfully unsubscribed!');
  }

  createNewEvent(): void {
    console.log('------------------------------');
    this.replaySubjectService.event.next(
      'ReplaySubject (manual) - ' + Math.random().toFixed(3)
    );
  }
}
