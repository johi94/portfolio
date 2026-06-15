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
    { name: 'James Rugman', project: 'Project Join', quoteKey: 'refQuoteJames' },
    { name: 'Evelyn Marx', project: 'Project DA Bubble', quoteKey: 'refQuoteEvelyn' },
    { name: 'Noah Müller', project: 'Project Pollo Loco', quoteKey: 'refQuoteNoah' },
  ];
}
