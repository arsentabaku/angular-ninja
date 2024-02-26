import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BehaviorSubjectService } from '../behavior-subject/behavior-subject.service';
import { EventEmitterService } from '../event-emitter/event-emitter.service';
import { ObservablesService } from '../observables/observables.service';
import { ReplaySubjectService } from '../replay-subject/replay-subject.service';
import { SubjectService } from '../subjects/subject.service';

const urlPaths = {
  subjects: 'subjects',
  eventEmitter: 'event-emitter',
  behaviorSubject: 'behavior-subject',
  replaySubject: 'replay-subject',
  observables: 'observables',
};
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
})
export class SharedComponent implements OnInit, OnDestroy {
  title = '___________';
  private activeService: EventEmitterService | ObservablesService | undefined;
  private readonly subscriptionsToClear: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService,
    private eventEmitterService: EventEmitterService,
    private behaviorSubjectService: BehaviorSubjectService,
    private replaySubjectService: ReplaySubjectService,
    private observableService: ObservablesService
  ) {
    this.subscriptionsToClear = new Subscription();
  }

  ngOnInit(): void {
    const activeSubjectInstanceInUrl = this.activatedRoute.snapshot.url[0].path;

    if (activeSubjectInstanceInUrl === urlPaths.subjects) {
      this.activeService = this.subjectService;
    } else if (activeSubjectInstanceInUrl === urlPaths.eventEmitter) {
      this.activeService = this.eventEmitterService;
    } else if (activeSubjectInstanceInUrl === urlPaths.behaviorSubject) {
      this.activeService = this.behaviorSubjectService;
    } else if (activeSubjectInstanceInUrl === urlPaths.replaySubject) {
      this.activeService = this.replaySubjectService;
    } else if (activeSubjectInstanceInUrl === urlPaths.observables) {
      this.activeService = this.observableService;
    }

    if (!this.activeService) {
      return;
    }

    this.subscriptionsToClear.add(
      this.activeService.event.subscribe((result: any) => {
        console.log('*. ', result);
        this.title = result;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionsToClear.unsubscribe();
    console.log('Shared - Successfully unsubscribed!');
  }
}
