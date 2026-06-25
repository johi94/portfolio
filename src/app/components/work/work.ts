import { Component, inject } from '@angular/core';
import { Translation, type TextKey } from '../../services/translation';
import { Button } from '../button/button';

interface Project {
  title: string;
  tech: string[];
  descriptionKey: TextKey;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

@Component({
  selector: 'app-work',
  imports: [Button],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  translation = inject(Translation);
  projects: Project[] = [
    {
      title: 'Pollo Loco',
      tech: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'workDescPollo',
      image: 'img/pollo_loco.png',
      githubUrl: 'https://github.com/johi94/El_Pollo_Loco/tree/main',
      liveUrl: 'https://pollo-loco.jonas-hildebrand.de',
    },
    {
      title: 'Pokédex',
      tech: ['JavaScript', 'HTML', 'CSS', 'API'],
      descriptionKey: 'workDescPoke',
      image: 'img/pokedex.png',
      githubUrl: 'https://github.com/johi94/Poked-x',
      liveUrl: 'https://pokedex.jonas-hildebrand.de',
    },
  ];
}
