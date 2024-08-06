import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  downloadCV() {
    window.open(`https://drive.google.com/uc?export=download&id=13wZ03Ofd_7PyH_5iERhBF6guPI2bdraT`)
  }
}
