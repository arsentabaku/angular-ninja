import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ObservablesService } from './observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit {
  title = '__________';
  private readonly subscriptionsToClear: Subscription;

  constructor(private observableService: ObservablesService) {
    this.subscriptionsToClear = new Subscription();
  }

  ngOnInit(): void {
    this.subscriptionsToClear.add(
      this.observableService.event.subscribe({
        next: (data: any) => {
          this.title = data;
          console.log('1. ' + data);
        },
        error: (error: Error) => {},
        complete: () => {},
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('Observables - Successfully unsubscribed!');
  }
}
