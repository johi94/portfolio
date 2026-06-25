import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Translation } from '../../services/translation';
import { Button } from '../button/button';
import { ScrollTop } from '../scroll-top/scroll-top';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

function noWhitespace(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;          
  return value.trim().length === 0 ? { whitespace: true } : null;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button, ScrollTop, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  translation = inject(Translation);
  private http = inject(HttpClient);
  
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
    }),
  });

  onSubmit() {
  if (this.contactForm.invalid) return;
  this.status.set('sending');

  const { userForm, message } = this.contactForm.getRawValue();
  const payload = { name: userForm.name, email: userForm.email, message };

  this.http.post('https://jonas-hildebrand.de/sendmail.php', payload).subscribe({
    next: () => {
      this.status.set('success');
      this.contactForm.reset();      
    },
    error: () => this.status.set('error'),
  });
}
}
