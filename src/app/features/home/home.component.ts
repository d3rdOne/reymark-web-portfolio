import { Component } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
