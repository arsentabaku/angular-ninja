import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalDocumentsRoutingModule } from './legal-documents.routing';
import { LegalDocumentsComponent } from './legal-documents.component';
import { LegalDocOverviewComponent } from './legal-doc-overview/legal-doc-overview.component';

@NgModule({
  declarations: [LegalDocumentsComponent, LegalDocOverviewComponent],
  imports: [CommonModule, LegalDocumentsRoutingModule],
})
export class LegalDocumentsModule {}
