import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet,RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  type = input<'button' | 'submit'>('button');
  disabled = input(false);
  href = input<string>();
  target = input<string>();
  routerLink = input<string>(); 
  fragment = input<string>();
  size = input<'normal' | 'large'>('normal');
  variant = input<'outline' | 'filled'>('outline');
}
