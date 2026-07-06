import { Injectable } from '@angular/core';


export interface ContactFormState {
  userForm: { name: string | null; email: string | null };
  message: string | null;
  privacy: boolean | null;
  website: string | null;
}

@Injectable({ providedIn: 'root' })
export class ContactStore {
  saved: ContactFormState | null = null;
}