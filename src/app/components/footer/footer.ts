import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  translation = inject(Translation);
}
