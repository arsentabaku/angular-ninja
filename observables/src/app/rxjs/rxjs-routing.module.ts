import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { EventEmmiterComponent } from './event-emitter/event-emmiter.component';
import { ObservablesComponent } from './observables/observables.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'event-emitter',
    component: EventEmmiterComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectComponent,
  },
  {
    path: 'replay-subject',
    component: ReplaySubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
