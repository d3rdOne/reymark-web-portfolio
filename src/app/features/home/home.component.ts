import { Component, EventEmitter, Output, output } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from '../../core/layout/components/footer/footer.component';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LayoutService } from '../../core/layout/layout.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillComponent, ExperienceComponent,CtaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router, private scroller:ViewportScroller, private layoutService: LayoutService) {

  }
  scrollDownClicked(target: string) {
    this.layoutService.scrollToElement$.next(target)
  }
}
