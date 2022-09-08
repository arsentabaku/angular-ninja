import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { KibanaComponent } from './components/kibana/kibana.component';
import { ProjectProcessingComponent } from './components/project-processing/project-processing.component';
import { AnalyticsRoutingModule } from './analytics.routing';
import { UI_MODULES } from '../ui-materials';

@NgModule({
  declarations: [
    AnalyticsComponent,
    KibanaComponent,
    ProjectProcessingComponent,
  ],
  imports: [CommonModule, AnalyticsRoutingModule, UI_MODULES],
})
export class AnalyticsModule {}
