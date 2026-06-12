import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  translation = inject(Translation);
}
