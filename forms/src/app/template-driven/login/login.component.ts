import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  userEnteredCredentials = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  submit(form: any): void {
    console.log(form);
    this.userEnteredCredentials.email = form.value.credentials.email;
    this.userEnteredCredentials.password = form.value.credentials.password;
    console.log(this.userEnteredCredentials);

    this.loginForm.reset();
  }
}
