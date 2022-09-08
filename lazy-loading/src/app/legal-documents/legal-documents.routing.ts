import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalDocOverviewComponent } from './legal-doc-overview/legal-doc-overview.component';
import { LegalDocumentsComponent } from './legal-documents.component';

const routes: Routes = [
  { path: '', component: LegalDocumentsComponent },
  { path: 'overview', component: LegalDocOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalDocumentsRoutingModule {}
