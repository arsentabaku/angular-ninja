import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared.routing';
import { UI_MODULES } from '../ui-materials';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule, UI_MODULES],
})
export class SharedModule {}
