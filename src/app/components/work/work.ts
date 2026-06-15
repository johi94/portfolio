import { Component, inject } from '@angular/core';
import { Translation, type TextKey } from '../../services/translation';

interface Project {
  title: string;
  tech: string[];
  descriptionKey: TextKey;
  image: string;
  githubUrl: string;
}

@Component({
  selector: 'app-work',
  imports: [],
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
      githubUrl: '',
    },
    {
      title: 'Pokédex',
      tech: ['JavaScript', 'HTML', 'CSS', 'API'],
      descriptionKey: 'workDescPoke',
      image: 'img/pokedex.png',
      githubUrl: '',
    },
  ];
}
