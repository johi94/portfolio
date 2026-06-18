import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  translation = inject(Translation);
}
