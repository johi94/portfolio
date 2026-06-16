import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgTemplateOutlet],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  type = input<'button' | 'submit'>('button');
  disabled = input(false);
  href = input<string>();
  target = input<string>();
  size = input<'normal' | 'large'>('normal');
}
