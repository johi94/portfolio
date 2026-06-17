import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-legal-notice',
  imports: [],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  translation = inject(Translation);
}