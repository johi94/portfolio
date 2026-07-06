import { Component, inject, signal, OnDestroy } from '@angular/core';
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
import { ContactStore } from '../../services/contact-store';

function noWhitespace(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (!value) return null;
  return value.trim().length === 0 ? { whitespace: true } : null;
}

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button, ScrollTop, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnDestroy {
  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  translation = inject(Translation);
  private http = inject(HttpClient);
  private store = inject(ContactStore);
  private closeTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    if (this.store.saved) {
      this.contactForm.patchValue(this.store.saved);
    }
  }

  ngOnDestroy() {
    this.store.saved = this.contactForm.getRawValue();
  }

  contactForm = new FormGroup({
    userForm: new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), noWhitespace],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.pattern(emailPattern), noWhitespace],
      }),
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), noWhitespace],
    }),
    privacy: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
    website: new FormControl(''),
  });

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.status.set('sending');

    const { userForm, message, website } = this.contactForm.getRawValue();
    const payload = { name: userForm.name, email: userForm.email, message, website };

    this.http.post('https://jonas-hildebrand.de/sendmail.php', payload).subscribe({
      next: () => {
        this.status.set('success');
        this.contactForm.reset();
        this.closeTimer = setTimeout(() => this.closePopup(), 3000);
      },
      error: () => this.status.set('error'),
    });
  }

    closePopup() {
    clearTimeout(this.closeTimer);
    this.status.set('idle');
  }
}
