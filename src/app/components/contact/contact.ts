import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Translation } from '../../services/translation';
import { Button } from '../button/button';

function noWhitespace(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  return value.trim().length === 0 ? { whitespace: true } : null;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact {
  translation = inject(Translation);

  contactForm = new FormGroup({
    userForm: new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), noWhitespace],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email, noWhitespace],
      }),
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), noWhitespace],
    }),
    privacy: new FormControl(false, {
      validators: [Validators.requiredTrue],
    })
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  untouch() {
    this.contactForm.markAsUntouched();
  }
}
