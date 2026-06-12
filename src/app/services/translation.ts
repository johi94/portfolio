import { computed, effect, Service, signal } from '@angular/core';

export type Lang = 'DE' | 'EN' | 'ESP';

function loadLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'DE' || stored === 'EN' || stored === 'ESP') {
    return stored;
  }
  return 'DE';
}

@Service()
export class Translation {
  readonly activeLang = signal<Lang>(loadLang());

  constructor() {
    effect(() => {
      localStorage.setItem('lang', this.activeLang());
    });
  }

  private readonly translations = {
    DE: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      work: 'Meine Arbeiten',
      greeting: 'Hallo! Ich bin Jonas',
      scroll: 'Scrollen',
    },
    EN: {
      about: 'About me',
      skills: 'Skill set',
      work: 'My work',
      greeting: 'Hello! I am Jonas',
      scroll: 'Scroll',
    },
    ESP: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      work: 'Mi trabajo',
      greeting: '¡Hola! Soy Jonas',
      scroll: 'Desplázate',
    },
  };

  readonly t = computed(() => this.translations[this.activeLang()]);

  setLang(lang: Lang) {
    this.activeLang.set(lang);
  }
}
