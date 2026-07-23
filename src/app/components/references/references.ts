import { Component, inject } from '@angular/core';
import {type TextKey, Translation } from '../../services/translation';

interface Reference {
  name: string;
  project: string;
  quoteKey: TextKey
}

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  translation = inject(Translation);
  
  references: Reference[] = [
  { name: 'W. Kasberg', project: 'Project Join', quoteKey: 'refQuoteKasberg' },
  { name: 'A. Wojak', project: 'Project Join', quoteKey: 'refQuoteWojak' },
];
}
