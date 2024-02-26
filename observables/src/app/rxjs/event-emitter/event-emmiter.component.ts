import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitterService } from './event-emitter.service';

@Component({
  selector: 'app-event-emmiter',
  templateUrl: './event-emmiter.component.html',
})
export class EventEmmiterComponent implements OnInit, OnDestroy {
  public title: string;
  private readonly subscriptionsToClear: Subscription;

  constructor(private eventEmitterService: EventEmitterService) {
    this.title = '__________';
    this.subscriptionsToClear = new Subscription();
  }

  ngOnInit(): void {
    this.eventEmitterService.event.emit('EventEmitter (automatic) 1/1');

    this.subscriptionsToClear.add(
      this.eventEmitterService.event.subscribe((result) => {
        this.title = result;
        console.log('1. ', result);
      })
    );

    this.eventEmitterService.event.emit('EventEmitter (automatic) 1/2');
    this.eventEmitterService.event.emit('EventEmitter (automatic) 1/3');

    this.subscriptionsToClear.add(
      this.eventEmitterService.event.subscribe((result) => {
        this.title = result;
        console.log('2. ', result);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('EventEmitter - Successfully unsubscribed!');
  }

  createNewEvent(): void {
    console.log('------------------------------');
    this.eventEmitterService.event.emit(
      'EventEmitter (manual) - ' + Math.random().toFixed(3)
    );
  }
}
