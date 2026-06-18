import { computed, effect, Service, signal } from '@angular/core';

export type Lang = 'DE' | 'EN' | 'ESP';

const de = {
  about: 'Über mich',
  skills: 'Fähigkeiten',
  work: 'Meine Arbeiten',
  greeting: 'Hallo! Ich bin Jonas',
  scroll: 'Scrollen',
  aboutTitle: 'Lassen Sie uns zusammen\narbeiten',
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
  contactNamePlaceholder: 'Dein Name',
  contactEmailPlaceholder: 'Deine E-Mail',
  contactMessagePlaceholder: 'Deine Nachricht',
  contactPrivacyBefore: 'Ich habe die ',
  contactPrivacyLink: 'Datenschutzerklärung',
  contactPrivacyAfter: ' gelesen und stimme der Verarbeitung meiner Daten zu.',
  contactSend: 'Sag hallo ;)',
  contactErrName: 'Bitte gib deinen Namen ein',
  contactErrEmailRequired: 'E-Mail ist erforderlich',
  contactErrEmailInvalid: 'Bitte eine gültige E-Mail eingeben',
  contactErrMessage: 'Bitte gib eine Nachricht ein',
  contactErrPrivacy: 'Bitte akzeptiere die Datenschutzerklärung',
  contactTitle: 'Kontakt',
  contactProblem: 'Du hast ein Problem zu lösen?',
  contactText:
    'Schreib mir gerne über das Formular. Ich melde mich so schnell wie möglich bei dir.',
  contactMe: 'Brauchst du einen Frontend-Entwickler?',
  contactMeAccent: 'Kontaktiere mich!',
  contactSending: 'Wird gesendet …',
  contactSuccess: 'Danke! Deine Nachricht ist angekommen, ich melde mich bald.',
  contactError: 'Ups, das hat nicht geklappt. Bitte versuch es später noch einmal.',
  footerLegal: 'Impressum',
  legalTitle: 'Impressum',
  legalImprintTitle: 'Angaben gemäß § 5 TMG',
  legalImprintText: 'Jonas Hildebrand\nStraße und Hausnummer\nPLZ und Ort\n\n',
  legalBoard: 'Kontakt',
  legalMail: 'E-Mail: jhildebrand94@googlemail.com',
  legalAcceptanceTitle: 'Annahme der Bedingungen',
  legalAcceptanceText:
    'Durch den Zugriff auf und die Nutzung von Portfolio (Produkt) erkennst du die folgenden Geschäftsbedingungen sowie alle Richtlinien, Leitlinien oder Änderungen an, die dir von Zeit zu Zeit vorgelegt werden können, und stimmst ihnen zu. Wir, die genannten Studierenden, können die Bedingungen jederzeit ohne Vorankündigung aktualisieren oder ändern.',
  legalScopeTitle: 'Umfang und Eigentum des Produkts',
  legalScopeText:
    'Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp der Developer Akademie GmbH entwickelt. Es dient Bildungszwecken und ist nicht für die umfangreiche private oder geschäftliche Nutzung bestimmt. Daher können wir keine durchgängige Verfügbarkeit, Zuverlässigkeit, Richtigkeit oder sonstige Qualität dieses Produkts garantieren. Das Design von Portfolio ist Eigentum der Developer Akademie GmbH. Die unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Reproduktion des Designs ist strengstens untersagt.',
  legalProprietaryTitle: 'Schutzrechte',
  legalProprietaryText:
    'Abgesehen von dem Design, das der Developer Akademie GmbH gehört, behalten wir, die genannten Studierenden, alle Eigentumsrechte an Portfolio, einschließlich aller damit verbundenen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten Informationen.',
  legalUseTitle: 'Nutzung des Produkts',
  legalUseText:
    'Portfolio ist ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu verwenden. Jede Nutzung von Portfolio für illegale Aktivitäten oder um eine andere Person zu belästigen, zu schädigen, zu bedrohen oder einzuschüchtern, ist strengstens untersagt. Du bist allein für deine Interaktionen mit anderen Nutzern von Portfolio verantwortlich.',
  legalDisclaimerTitle: 'Haftungsausschluss und Haftungsbeschränkung',
  legalDisclaimerText:
    'Portfolio wird „wie besehen" ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich, aber nicht beschränkt auf die stillschweigenden Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten. In keinem Fall haften wir, die genannten Studierenden, oder die Developer Akademie für direkte, indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich, aber nicht beschränkt auf Schäden durch entgangenen Gewinn, Verlust von Geschäftswert, Nutzung, Daten oder andere immaterielle Verluste, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden, die sich aus der Nutzung oder Leistung von Portfolio ergeben oder damit in Zusammenhang stehen.',
  legalIndemnityTitle: 'Schadloshaltung',
  legalIndemnityText:
    'Du erklärst dich damit einverstanden, uns, die genannten Studierenden, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, leitenden Angestellten, Direktoren, Beauftragten und Mitarbeiter von allen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Verbindlichkeiten (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und schadlos zu halten, die sich aus deiner Nutzung von Portfolio und/oder deinem Verstoß gegen dieses Impressum ergeben oder damit zusammenhängen.',
  legalContact: 'Bei Fragen oder Mitteilungen kontaktiere uns bitte unter jhildebrand94@googlemail.com.',
  legalDate: 'Stand: 22. Juni 2026',
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
    contactErrEmailInvalid: 'Please enter a valid email',
    contactErrMessage: 'Please enter a message',
    contactErrPrivacy: 'Please accept the privacy policy',
    contactTitle: 'Contact',
    contactProblem: 'Got a problem to solve?',
    contactText: "Drop me a message via the form. I'll get back to you as soon as possible.",
    contactMe: 'Need a Frontend developer?',
    contactMeAccent: 'Contact me!',
    contactSending: 'Sending …',
    contactSuccess: "Thanks! Your message arrived, I'll get back to you soon.",
    contactError: "Oops, that didn't work. Please try again later.",
    footerLegal: 'Legal Notice',
    legalTitle: 'Legal Notice',
    legalImprintTitle: 'Imprint',
    legalImprintText: 'Jonas Hildebrand\nStraße und Hausnummer\nPLZ und Ort\n\n',
    legalBoard: 'Contact',
    legalMail: 'E-Mail: jhildebrand94@googlemail.com',
    legalAcceptanceTitle: 'Acceptance of terms',
    legalAcceptanceText:
      'By accessing and using Portfolio (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.',
    legalScopeTitle: 'Scope and ownership of the product',
    legalScopeText:
      'Portfolio has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product. The design of Portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.',
    legalProprietaryTitle: 'Proprietary rights',
    legalProprietaryText:
      'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Portfolio, including any associated copyrighted material, trademarks, and other proprietary information.',
    legalUseTitle: 'Use of the product',
    legalUseText:
      'Portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Portfolio for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Portfolio.',
    legalDisclaimerTitle: 'Disclaimer of warranties and limitation of liability',
    legalDisclaimerText:
      'Portfolio is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Portfolio.',
    legalIndemnityTitle: 'Indemnity',
    legalIndemnityText:
      'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Portfolio and/or your breach of this Legal Notice.',
    legalContact:
      'For any questions or notices, please contact us at jhildebrand94@googlemail.com.',
    legalDate: 'Date: June 22, 2026',
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
      '«Jonas desarrolla con criterio y colabora bien con el equipo. Fiable, amable y siempre dispuesto a ayudar.»',
    contactNamePlaceholder: 'Tu nombre',
    contactEmailPlaceholder: 'Tu correo',
    contactMessagePlaceholder: 'Tu mensaje',
    contactPrivacyBefore: 'He leído la ',
    contactPrivacyLink: 'política de privacidad',
    contactPrivacyAfter: ' y acepto el tratamiento de mis datos.',
    contactSend: 'Saluda ;)',
    contactErrName: 'Introduce tu nombre',
    contactErrEmailRequired: 'El correo es obligatorio',
    contactErrEmailInvalid: 'Introduce un correo válido',
    contactErrMessage: 'Escribe un mensaje',
    contactErrPrivacy: 'Acepta la política de privacidad',
    contactTitle: 'Contacto',
    contactProblem: '¿Tienes un problema para resolver?',
    contactText: 'Escríbeme a través del formulario y te responderé lo antes posible.',
    contactMe: '¿Necesitas un desarrollador frontend?',
    contactMeAccent: '¡Contáctame!',
    contactSending: 'Enviando …',
    contactSuccess: '¡Gracias! Tu mensaje ha llegado, te responderé pronto.',
    contactError: 'Uy, algo salió mal. Inténtalo de nuevo más tarde.',
    footerLegal: 'Aviso legal',
    legalTitle: 'Aviso legal',
    legalImprintTitle: 'Datos identificativos',
    legalImprintText: 'Jonas Hildebrand\nCalle y número\nCódigo postal y ciudad\n\n',
    legalBoard: 'Contacto',
    legalMail: 'E-Mail: jhildebrand94@googlemail.com',
    legalAcceptanceTitle: 'Aceptación de los términos',
    legalAcceptanceText:
      'Al acceder y utilizar Portfolio (el Producto), reconoces y aceptas los siguientes términos y condiciones, así como cualquier política, directriz o modificación que se te pueda presentar ocasionalmente. Nosotros, los estudiantes mencionados, podemos actualizar o modificar los términos y condiciones en cualquier momento y sin previo aviso.',
    legalScopeTitle: 'Alcance y propiedad del producto',
    legalScopeText:
      'Portfolio se ha desarrollado como parte de un proyecto grupal de estudiantes en un bootcamp de desarrollo web de Developer Akademie GmbH. Tiene una finalidad educativa y no está destinado a un uso personal o comercial extensivo. Por ello, no podemos garantizar de forma continuada la disponibilidad, fiabilidad, exactitud ni ningún otro aspecto de calidad de este Producto. El diseño de Portfolio es propiedad de Developer Akademie GmbH. Queda estrictamente prohibido el uso, la reproducción, la modificación, la distribución o la replicación no autorizados del diseño.',
    legalProprietaryTitle: 'Derechos de propiedad',
    legalProprietaryText:
      'Aparte del diseño, propiedad de Developer Akademie GmbH, nosotros, los estudiantes mencionados, conservamos todos los derechos de propiedad sobre Portfolio, incluido cualquier material protegido por derechos de autor, marcas comerciales y otra información protegida asociada.',
    legalUseTitle: 'Uso del producto',
    legalUseText:
      'Portfolio está destinado a utilizarse únicamente con fines lícitos, de acuerdo con todas las leyes y normativas aplicables. Queda estrictamente prohibido cualquier uso de Portfolio para actividades ilegales o para acosar, dañar, amenazar o intimidar a otra persona. Eres el único responsable de tus interacciones con otros usuarios de Portfolio.',
    legalDisclaimerTitle: 'Exención de garantías y limitación de responsabilidad',
    legalDisclaimerText:
      'Portfolio se proporciona "tal cual", sin garantía de ningún tipo, ya sea expresa o implícita, incluidas, entre otras, las garantías implícitas de comerciabilidad, idoneidad para un fin determinado y no infracción. En ningún caso nosotros, los estudiantes mencionados, ni Developer Akademie seremos responsables de daños directos, indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, los daños por pérdida de beneficios, fondo de comercio, uso, datos u otras pérdidas intangibles, incluso si se nos ha advertido de la posibilidad de dichos daños, que se deriven del uso o el rendimiento de Portfolio o estén relacionados con ellos.',
    legalIndemnityTitle: 'Indemnización',
    legalIndemnityText:
      'Aceptas indemnizar, defender y eximir de responsabilidad a nosotros, los estudiantes mencionados, a Developer Akademie y a nuestras filiales, socios, directivos, directores, agentes y empleados, frente a cualquier reclamación, demanda, pérdida, daño, coste o responsabilidad (incluidos los honorarios legales razonables) que se derive de tu uso de Portfolio o de tu incumplimiento de este aviso legal, o que esté relacionado con ellos.',
    legalContact: 'Para cualquier pregunta o notificación, contáctanos en jhildebrand94@googlemail.com.',
    legalDate: 'Fecha: 22 de junio de 2026',
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
