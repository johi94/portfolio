import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
    { name: 'Supabase', icon: 'supabase.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'REST-API', icon: 'rest-api.svg' },
    { name: 'Material Design', icon: 'material-design.svg' },
    { name: 'Growth Mindset', icon: 'growth-mindset.svg' },
  ];
}
