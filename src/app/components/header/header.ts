import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translation = inject(Translation);
}
