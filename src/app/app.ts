import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Work } from './components/work/work';
import { References } from './components/references/references';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Skills, Work, References, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
