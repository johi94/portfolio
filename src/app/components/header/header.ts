import { Component, inject, signal, HostListener } from '@angular/core';
import { Translation } from '../../services/translation';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  translation = inject(Translation);
  private router = inject(Router);
  isScrolled = signal(false);

  isHome = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url.split('#')[0] === '/'),
    ),
    { initialValue: this.router.url.split('#')[0] === '/' },
  );

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 0);
  }
}
