import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KibanaComponent } from './components/kibana/kibana.component';
import { AnalyticsComponent } from './analytics.component';
import { ProjectProcessingComponent } from './components/project-processing/project-processing.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent },
  { path: 'kibana', component: KibanaComponent },
  { path: 'project-processing', component: ProjectProcessingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AnalyticsRoutingModule {}
