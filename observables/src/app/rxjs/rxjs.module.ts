import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { FormsModule } from '@angular/forms';
import { EventEmitterService } from './event-emitter/event-emitter.service';
import { EventEmmiterComponent } from './event-emitter/event-emmiter.component';
import { SubjectService } from './subjects/subject.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { BehaviorSubjectService } from './behavior-subject/behavior-subject.service';
import { ReplaySubjectService } from './replay-subject/replay-subject.service';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SharedComponent } from './shared/shared.component';
import { ObservablesComponent } from './observables/observables.component';
import { ObservablesService } from './observables/observables.service';

@NgModule({
  declarations: [
    EventEmmiterComponent,
    SubjectsComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SharedComponent,
    ObservablesComponent,
  ],
  imports: [CommonModule, RxjsRoutingModule, FormsModule],
  providers: [
    EventEmitterService,
    SubjectService,
    BehaviorSubjectService,
    ReplaySubjectService,
    ObservablesService,
  ],
})
export class SubjectsRxjsModule {}
