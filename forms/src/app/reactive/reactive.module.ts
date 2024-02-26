import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
