import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  translation = inject(Translation);
}