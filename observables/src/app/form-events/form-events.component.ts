import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { count, map } from 'rxjs/operators';

@Component({
  selector: 'app-form-events',
  templateUrl: './form-events.component.html',
  styleUrls: ['./form-events.component.scss'],
})
export class FormEventsComponent {
  coolForm: FormGroup;
  data!: string;
  numberOfChars = 0;

  constructor() {
    this.coolForm = new FormGroup({
      email: new FormControl(''),
    });

    this.coolForm.valueChanges
      .pipe(
        map((n) => {
          return n.email.split('').reverse().join('');
        })
      )
      // .subscribe((value) => (this.data = value));
      .subscribe({
        next: (value: string) => {
          this.data = value;
        },
      });
  }
}
