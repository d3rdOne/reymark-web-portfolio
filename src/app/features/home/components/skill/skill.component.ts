import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TECHNOLOGIES } from '../../../../../skils';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  showColored: boolean = false;
  tools: any[] =TECHNOLOGIES;
}
