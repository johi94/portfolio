import { Component, inject } from '@angular/core';
import { Translation } from '../../services/translation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  translation = inject(Translation);
}
