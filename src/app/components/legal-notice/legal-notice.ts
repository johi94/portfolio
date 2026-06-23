import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports:[RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  translation = inject(Translation);
}