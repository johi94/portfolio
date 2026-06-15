import { Component, inject, signal, HostListener } from '@angular/core';
import { Translation } from '../../services/translation';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translation = inject(Translation);
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 0);
  }
}
