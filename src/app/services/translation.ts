import { computed, effect, Service, signal } from '@angular/core';
import { legalDe, legalEn, legalEs } from './legal.translation';
import { privacyDe, privacyEn, privacyEs } from './privacy.translation';

export type Lang = 'DE' | 'EN' | 'ES';

const de = {
  about: 'Über mich',
  skills: 'Fähigkeiten',
  work: 'Meine Arbeiten',
  greeting: 'Hallo! Ich bin Jonas',
  scroll: 'Scrollen',
  scrollDown: 'Runterscrollen',
  aboutTitle: 'Lassen Sie uns zusammen\narbeiten',
  aboutSubtitle: 'Ich',
  aboutFactLocation: 'wohne in Puebla',
  aboutFactRemote: 'bin offen für Remote-Arbeit',
  aboutBio1:
    'Am Frontend fasziniert mich, wie aus einer Idee eine durchdachte, lebendige Oberfläche entsteht. Das Zusammenspiel aus klarer Logik und gutem Design treibt mich an. Diese Begeisterung hält mich neugierig und offen, mich stetig in neue Technologien einzuarbeiten.',
  aboutBio2:
    'An Probleme gehe ich analytisch heran und behalte zugleich den kreativen Spielraum im Blick. Oft entsteht die eleganteste Lösung genau aus dieser Verbindung. Jede Herausforderung sehe ich als Gelegenheit, Neues zu lernen und mich weiterzuentwickeln.',
  aboutCta: 'Nachricht senden',
  titleWork: 'Meine Arbeiten',
  workSubtitle:
    'Entdecken Sie hier eine Auswahl meiner Arbeiten. Interagieren Sie mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
  workDescPollo:
    'Jump-, Run- und Wurfspiel auf Basis objektorientierter Programmierung. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
  workDescPoke:
    'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
  refTitle: 'Brauchen Sie einen Teamplayer?',
  refSubtitle: 'Das sagen meine Kolleg:innen über mich.',
  refQuoteJames:
    '„Jonas ist ein zuverlässiger und freundlicher Teamkollege. Er arbeitet strukturiert und schreibt sauberen Code. Ich würde jederzeit wieder mit ihm zusammenarbeiten."',
  refQuoteEvelyn:
    '„Jonas ist ein vertrauenswürdiger Teamplayer, der auch unter Termindruck ruhig bleibt. Strukturierte Arbeit und klare Kommunikation."',
  refQuoteNoah:
    '„Jonas entwickelt durchdacht und arbeitet gut mit dem Team zusammen. Zuverlässig, freundlich und immer hilfsbereit."',
  contactNamePlaceholder: 'Ihr Name',
  contactEmailPlaceholder: 'Ihre E-Mail',
  contactMessagePlaceholder: 'Ihre Nachricht',
  contactPrivacyBefore: 'Ich habe die ',
  contactPrivacyLink: 'Datenschutzerklärung',
  contactPrivacyAfter: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
  contactSend: 'Sagen Sie hallo ;)',
  contactErrName: 'Bitte geben Sie Ihren Namen ein.',
  contactErrEmailRequired: 'E-Mail ist erforderlich.',
  contactErrEmailInvalid: 'Bitte eine gültige E-Mail mit Domain eingeben (z. B. name@domain.de).',
  contactErrMessage: 'Bitte geben Sie eine Nachricht ein.',
  contactErrPrivacy: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
  contactTitle: 'Kontakt',
  contactProblem: 'Sie haben ein Problem zu lösen?',
  contactText:
    'Schreiben Sie mir gerne über das Formular. Ich melde mich so schnell wie möglich bei Ihnen.',
  contactMe: 'Brauchen Sie einen Frontend-Entwickler?',
  contactMeAccent: 'Kontaktieren Sie mich!',
  contactSending: 'Wird gesendet …',
  contactSuccess: 'Danke! Ihre Nachricht ist angekommen.',
  contactError: 'Ups, das hat nicht geklappt. Bitte versuchen Sie es später noch einmal.',
  footerLegal: 'Impressum',
  ...legalDe,
  ...privacyDe,
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
    scrollDown: 'Scroll down',
    aboutTitle: "Let's work\ntogether",
    aboutSubtitle: 'I am',
    aboutFactLocation: 'located in Puebla',
    aboutFactRemote: 'open to remote work',
    aboutBio1:
      'What fascinates me about frontend development is watching an idea grow into a thoughtful, lively interface. The interplay of clear logic and good design is what drives me. That enthusiasm keeps me curious and open to continually working my way into new technologies.',
    aboutBio2:
      'I approach problems analytically while keeping the creative side in view. Often the most elegant solution emerges from exactly that combination. I see every challenge as an opportunity to learn something new and to grow.',
    aboutCta: 'Send a message',
    titleWork: 'My work',
    workSubtitle:
      'Explore a selection of my work here. Interact with projects to see my skills in action.',
    workDescPollo:
      'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    workDescPoke:
      'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
    refTitle: 'Need a team player?',
    refSubtitle: 'Here is what my colleagues say about me.',
    refQuoteJames:
      '"Jonas is a reliable and friendly teammate. He works in a structured way and writes clean code — I would gladly work with him again."',
    refQuoteEvelyn:
      '"Jonas is a trustworthy team player who stays calm under deadline pressure. Structured work and clear communication."',
    refQuoteNoah:
      '"Jonas develops thoughtfully and collaborates well with the team. Reliable, friendly and always willing to help."',
    contactNamePlaceholder: 'Your name',
    contactEmailPlaceholder: 'Your email',
    contactMessagePlaceholder: 'Your message',
    contactPrivacyBefore: 'I have read the ',
    contactPrivacyLink: 'privacy policy',
    contactPrivacyAfter: ' and agree to the processing of my data.',
    contactSend: 'Say hello ;)',
    contactErrName: 'Please enter your name',
    contactErrEmailRequired: 'Email is required',
    contactErrEmailInvalid: 'Please enter a valid email with a domain (e.g. name@domain.com)',
    contactErrMessage: 'Please enter a message',
    contactErrPrivacy: 'Please accept the privacy policy',
    contactTitle: 'Contact',
    contactProblem: 'Got a problem to solve?',
    contactText: "Drop me a message via the form. I'll get back to you as soon as possible.",
    contactMe: 'Need a Frontend developer?',
    contactMeAccent: 'Contact me!',
    contactSending: 'Sending …',
    contactSuccess: 'Thanks! Your message arrived.',
    contactError: "Oops, that didn't work. Please try again later.",
    footerLegal: 'Legal Notice',
    ...legalEn,
    ...privacyEn,
  },

  ES: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    work: 'Mi trabajo',
    greeting: '¡Hola! Soy Jonas',
    scroll: 'Desplácese',
    scrollDown: 'Desplácese hacia abajo',
    aboutTitle: 'Trabajemos\njuntos',
    aboutSubtitle: 'Yo soy',
    aboutFactLocation: 'Ubicado en Puebla',
    aboutFactRemote: 'abierto a trabajo remoto',
    aboutBio1:
      'Lo que me fascina del desarrollo frontend es ver cómo una idea se convierte en una interfaz cuidada y dinámica. La combinación de una lógica clara y un buen diseño es lo que me impulsa. Ese entusiasmo me mantiene curioso y abierto a adentrarme constantemente en nuevas tecnologías.',
    aboutBio2:
      'Afronto los problemas de forma analítica sin perder de vista el lado creativo. A menudo la solución más elegante surge precisamente de esa combinación. Cada reto lo veo como una oportunidad para aprender algo nuevo y crecer.',
    aboutCta: 'Envíe un mensaje',
    titleWork: 'Mis trabajos',
    workSubtitle:
      'Descubra aquí una selección de mis trabajos. Interactúe con los proyectos para ver mis habilidades en acción.',
    workDescPollo:
      'Juego de saltar, correr y lanzar basado en programación orientada a objetos. Ayude a Pepe a encontrar monedas y salsa de tabasco para luchar contra el pollo loco.',
    workDescPoke:
      'Basado en la PokéAPI, una sencilla biblioteca que proporciona y cataloga información de Pokémon.',
    refTitle: '¿Necesita un jugador de equipo?',
    refSubtitle: 'Esto es lo que dicen mis colegas sobre mí.',
    refQuoteJames:
      '«Jonas es un compañero fiable y amable. Trabaja de forma estructurada y escribe código limpio; trabajaría con él de nuevo sin dudarlo.»',
    refQuoteEvelyn:
      '«Jonas es un compañero de equipo de confianza que mantiene la calma bajo la presión de los plazos. Trabajo estructurado y comunicación clara.»',
    refQuoteNoah:
      '«Jonas desarrolla con criterio y colabora bien con el equipo. Fiable, amable y siempre dispuesto a ayudar.»',
    contactNamePlaceholder: 'Su nombre',
    contactEmailPlaceholder: 'Su correo',
    contactMessagePlaceholder: 'Su mensaje',
    contactPrivacyBefore: 'He leído la ',
    contactPrivacyLink: 'política de privacidad',
    contactPrivacyAfter: ' y acepto el tratamiento de mis datos.',
    contactSend: 'Enviar ;)',
    contactErrName: 'Introduzca su nombre',
    contactErrEmailRequired: 'El correo es obligatorio',
    contactErrEmailInvalid: 'Introduzca un correo válido con dominio (p. ej. nombre@dominio.es)',
    contactErrMessage: 'Escriba un mensaje',
    contactErrPrivacy: 'Acepte la política de privacidad',
    contactTitle: 'Contacto',
    contactProblem: '¿Tiene un problema para resolver?',
    contactText: 'Escríbame a través del formulario y le responderé lo antes posible.',
    contactMe: '¿Necesita un desarrollador frontend?',
    contactMeAccent: '¡Contácteme!',
    contactSending: 'Enviando …',
    contactSuccess: '¡Gracias! Su mensaje ha llegado.',
    contactError: 'Uy, algo salió mal. Inténtelo de nuevo más tarde.',
    footerLegal: 'Aviso legal',
    ...legalEs,
    ...privacyEs,
  },
};

function loadLang(): Lang {
  const stored = localStorage.getItem('lang');
  if (stored === 'DE' || stored === 'EN' || stored === 'ES') {
    return stored;
  }
  return 'DE';
}

@Service()
export class Translation {
  readonly activeLang = signal<Lang>(loadLang());

  constructor() {
    effect(() => {
      const lang = this.activeLang();
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang.toLowerCase()
    });
  }

  readonly t = computed(() => translations[this.activeLang()]);

  setLang(lang: Lang) {
    this.activeLang.set(lang);
  }
}
