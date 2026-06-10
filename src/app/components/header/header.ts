import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLang = signal('DE');

  translations: any = {
    DE: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      work: 'Meine Arbeiten'
    },
    EN: {
      about: 'About me',
      skills: 'Skill set',
      work: 'My work'
    },
    ESP: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      work: 'Mi trabajo'
    }
  };

  setLang(lang: string) {
    this.activeLang.set(lang);
  }
}
