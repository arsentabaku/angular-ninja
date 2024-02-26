import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit, OnDestroy {
  title = '__________';
  private readonly subscriptionsToClear: Subscription;

  constructor(private subjectService: SubjectService) {
    this.subscriptionsToClear = new Subscription();
  }

  ngOnInit(): void {
    this.subjectService.event.next('Subjects (automatic) 1/1');

    this.subscriptionsToClear.add(
      this.subjectService.event.subscribe((result) => {
        this.title = result;
        console.log('1. ', result);
      })
    );

    this.subjectService.event.next('Subjects (automatic) 1/2');
    this.subjectService.event.next('Subjects (automatic) 1/3');

    this.subscriptionsToClear.add(
      this.subjectService.event.subscribe((result) => {
        this.title = result;
        console.log('2. ', result);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('Subject - Successfully unsubscribed!');
  }

  createNewEvent(): void {
    console.log('------------------------------');
    this.subjectService.event.next(
      'Subjects (manual) - ' + Math.random().toFixed(3)
    );
  }
}
