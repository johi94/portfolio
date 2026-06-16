import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { Button } from '../button/button';

@Component({
  selector: 'app-about',
  imports: [Button],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  translation = inject(Translation)
}
