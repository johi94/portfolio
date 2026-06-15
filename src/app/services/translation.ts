import { computed, effect, Service, signal } from '@angular/core';

export type Lang = 'DE' | 'EN' | 'ESP';

const de = {
  about: 'Über mich',
  skills: 'Fähigkeiten',
  work: 'Meine Arbeiten',
  greeting: 'Hallo! Ich bin Jonas',
  scroll: 'Scrollen',
  aboutTitle: 'Lassen Sie uns zusammen­arbeiten',
  aboutSubtitle: 'Ich',
  aboutFactLocation: 'wohne in Puebla',
  aboutFactRemote: 'bin offen für Remote-Arbeit',
  aboutBio1:
    'Ich bin leidenschaftlicher Frontend-Entwickler und liebe es, Ideen in saubere, lebendige Web-Oberflächen zu verwandeln. Neue Technologien zu lernen treibt mich an – jeder Tag ist eine Chance, besser zu werden.',
  aboutBio2:
    'An Herausforderungen gehe ich analytisch heran und suche nach der elegantesten Lösung. Dabei zählen für mich Neugier, Ausdauer und gute Zusammenarbeit im Team.',
  aboutCta: 'Nachricht senden',
  titleWork: 'Meine Arbeiten',
  workSubtitle:
    'Entdecke hier eine Auswahl meiner Arbeiten. Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
  workDescPollo:
    'Jump-, Run- und Wurfspiel auf Basis objektorientierter Programmierung. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
  workDescPoke:
    'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
  refTitle: 'Brauchst du einen Teamplayer?',
  refSubtitle: 'Das sagen meine Kolleg:innen über mich.',
  refQuoteJames:
    '„Jonas ist ein zuverlässiger und freundlicher Teamkollege. Er arbeitet strukturiert und schreibt sauberen Code ich würde jederzeit wieder mit ihm zusammenarbeiten."',
  refQuoteEvelyn:
    '„Jonas ist ein vertrauenswürdiger Teamplayer, der auch unter Termindruck ruhig bleibt. Strukturierte Arbeit und klare Kommunikation."',
  refQuoteNoah:
    '„Jonas entwickelt durchdacht und arbeitet gut mit dem Team zusammen. Zuverlässig, freundlich und immer hilfsbereit."',
};

export type Texts = typeof de;
export type TextKey = keyof Texts;

const translations: Record<Lang, Texts> = {
  DE: de,
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
    titleWork: 'My work',
    workSubtitle:
      'Explore a selection of my work here. Interact with projects to see my skills in action.',
    workDescPollo:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    workDescPoke:
      'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    refTitle: 'Need a teamplayer?',
    refSubtitle: 'Here is what my colleagues say about me.',
    refQuoteJames:
      '"Jonas is a reliable and friendly teammate. He works in a structured way and writes clean code — I would gladly work with him again."',
    refQuoteEvelyn:
      '"Jonas is a trustworthy team player who stays calm under deadline pressure. Structured work and clear communication."',
    refQuoteNoah:
      '"Jonas develops thoughtfully and collaborates well with the team. Reliable, friendly and always willing to help."'
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
    titleWork: 'mis trabajos',
    workSubtitle:
      'Explora aquí una selección de mi trabajo. Interactúa con los proyectos para ver mis habilidades en acción.',
    workDescPollo:
      'Juego de saltar, correr y lanzar basado en programación orientada a objetos. Ayuda a Pepe a encontrar monedas y salsa de tabasco para luchar contra el pollo loco.',
    workDescPoke:
      'Basado en la PokéAPI, una sencilla biblioteca que proporciona y cataloga información de Pokémon.',
    refTitle: '¿Necesitas un jugador de equipo?',
    refSubtitle: 'Esto es lo que dicen mis colegas sobre mí.',
    refQuoteJames:
      '«Jonas es un compañero fiable y amable. Trabaja de forma estructurada y escribe código limpio; trabajaría con él de nuevo sin dudarlo.»',
    refQuoteEvelyn:
      '«Jonas es un compañero de equipo de confianza que mantiene la calma bajo la presión de los plazos. Trabajo estructurado y comunicación clara.»',
    refQuoteNoah:
      '«Jonas desarrolla con criterio y colabora bien con el equipo. Fiable, amable y siempre dispuesto a ayudar.»'
  },
};

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

  readonly t = computed(() => translations[this.activeLang()]);

  setLang(lang: Lang) {
    this.activeLang.set(lang);
  }
}
