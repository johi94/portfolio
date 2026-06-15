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
      aboutTitle: 'Lassen Sie uns zusammen\u00ADarbeiten',
      aboutSubtitle: 'Ich',
      aboutFactLocation: 'wohne in Puebla',
      aboutFactRemote: 'bin offen für Remote-Arbeit',
      aboutBio1:
        'Ich bin leidenschaftlicher Frontend-Entwickler und liebe es, Ideen in saubere, lebendige Web-Oberflächen zu verwandeln. Neue Technologien zu lernen treibt mich an – jeder Tag ist eine Chance, besser zu werden.',
      aboutBio2:
        'An Herausforderungen gehe ich analytisch heran und suche nach der elegantesten Lösung. Dabei zählen für mich Neugier, Ausdauer und gute Zusammenarbeit im Team.',
      aboutCta: 'Nachricht senden',
    },
    EN: {
      about: 'About me',
      skills: 'Skill set',
      work: 'My work',
      greeting: 'Hello! I am Jonas',
      scroll: 'Scroll',
      aboutTitle: 'Lets work together',
      aboutSubtitle: 'I am',
      aboutFactLocation: 'located in Puebla',
      aboutFactRemote: 'open to work remote',
      aboutBio1:
        'I am a passionate frontend developer who loves turning ideas into clean, lively web interfaces. Learning new technologies drives me — every day is a chance to get better.',
      aboutBio2:
        'I approach challenges analytically and look for the most elegant solution. Curiosity, persistence and good teamwork matter most to me.',
      aboutCta: 'Send a message',
    },
    ESP: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      work: 'Mi trabajo',
      greeting: '¡Hola! Soy Jonas',
      scroll: 'Desplázate',
      aboutTitle: 'Trabajemos juntos',
      aboutSubtitle: 'Yo soy',
      aboutFactLocation: 'Ubicado en Puebla',
      aboutFactRemote: 'abierto a trabajo remoto',
      aboutBio1:
        'Soy un desarrollador frontend apasionado al que le encanta convertir ideas en interfaces web limpias y dinámicas. Aprender nuevas tecnologías me motiva: cada día es una oportunidad para mejorar.',
      aboutBio2:
        'Afronto los retos de forma analítica y busco la solución más elegante. Para mí, lo más importante es la curiosidad, la perseverancia y el buen trabajo en equipo.',
      aboutCta: 'Enviar mensaje',
    },
  };

  readonly t = computed(() => this.translations[this.activeLang()]);

  setLang(lang: Lang) {
    this.activeLang.set(lang);
  }
}
