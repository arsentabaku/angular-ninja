import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehaviorSubjectService } from './behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
})
export class BehaviorSubjectComponent implements OnInit {
  public title: string;
  private subscriptionsToClear: Subscription;

  constructor(private behaviorSubjectService: BehaviorSubjectService) {
    this.title = '__________';
    this.subscriptionsToClear = new Subscription();
  }

  ngOnInit(): void {
    this.behaviorSubjectService.event.next('BehaviorSubject (automatic) 1/1');
    this.behaviorSubjectService.event.next('BehaviorSubject (automatic) 1/2');
    this.behaviorSubjectService.event.next('BehaviorSubject (automatic) 1/3');

    this.subscriptionsToClear.add(
      this.behaviorSubjectService.event.subscribe((result) => {
        this.title = result;
        console.log('1. ', result);
      })
    );

    this.behaviorSubjectService.event.next('BehaviorSubject (automatic) 1/4');

    this.subscriptionsToClear.add(
      this.behaviorSubjectService.event.subscribe((result) => {
        this.title = result;
        console.log('2. ', result);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('BehaviorSubject - Successfully unsubscribed!');
  }

  createNewEvent(): void {
    console.log('------------------------------');
    this.behaviorSubjectService.event.next(
      'BehaviorSubject (manual) - ' + Math.random().toFixed(3)
    );
  }
}
