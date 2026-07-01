import { Component, inject, signal, HostListener, ElementRef } from '@angular/core';
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
  private elementRef = inject(ElementRef);
  isScrolled = signal(false);
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  changeLang(lang: 'DE' | 'EN' | 'ES') {
    this.translation.setLang(lang);
    this.closeMenu();
  }

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

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.menuOpen()) return;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeMenu();
    }
  }
}
