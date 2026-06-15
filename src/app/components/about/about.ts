import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  translation = inject(Translation)
}
