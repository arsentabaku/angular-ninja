import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('userForm') signupForm!: NgForm;
  answer: string = '';
  genders = ['male', 'female'];
  submitted = false;
  userDataToSendToApi = {
    gender: '',
    secretQuestions: {
      question: '',
      secret: '',
    },
    userData: {
      email: '',
      username: '',
    },
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   gender: 'male',
    //   secretQuestions: {
    //     question: 'sss',
    //     secret: 'pet',
    //   },
    //   userData: {
    //     email: 'a@gs.com',
    //     username: suggestedName,
    //   },
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // METHOD 1: Accessing form via parameter
  // onSubmit(form: NgForm) {
  //   console.log('Submittedd...', form);
  // }

  // METHOD 2: Accessing form via ViewChild
  onSubmit() {
    console.log('Submittedd...', this.signupForm);
    this.userDataToSendToApi.gender = this.signupForm.value.gender;
    this.userDataToSendToApi.secretQuestions.question =
      this.signupForm.value.secretQuestions.question;
    this.userDataToSendToApi.secretQuestions.secret =
      this.signupForm.value.secretQuestions.secret;
    this.userDataToSendToApi.userData.email =
      this.signupForm.value.userData.email;
    this.userDataToSendToApi.userData.username =
      this.signupForm.value.userData.username;

    this.submitted = true;
    this.signupForm.reset();
  }
}
