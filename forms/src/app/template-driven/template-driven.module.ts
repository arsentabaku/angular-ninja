import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [CommonModule, TemplateDrivenRoutingModule, FormsModule],
})
export class TemplateDrivenModule {}
