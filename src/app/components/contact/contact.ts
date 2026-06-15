import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
   contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue),
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      
    }
  }
}
