import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  forbiddenUsernames = ['Eri', 'Berti'];

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenUsernamesValidator.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.signUpForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
    // this.signUpForm.setValue({
    //   userData: {
    //     username: 'sudo',
    //     email: 'pet@gmail.com',
    //   },
    //   gender: 'male',
    //   hobies: [],
    // });
    this.signUpForm.patchValue({
      userData: {
        username: 'Patched username'
      },
    });
  }

  submit(): void {
    console.log(this.signUpForm);
  }

  addHobby(): void {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    console.log('lll');
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  forbiddenUsernamesValidator(
    control: FormControl
  ): null | { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }

    return null;
  }
}
