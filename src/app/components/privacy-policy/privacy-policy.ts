import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports:[RouterLink,],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  translation = inject(Translation);
}