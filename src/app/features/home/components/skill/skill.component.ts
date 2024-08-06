import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {

  showColored: boolean = false;
  tools: any[] = [{
    label: 'Angular',
    monoImg: '',
    imgUrl: 'angular.svg'
  }, {
    label: 'React',
    monoImg: '',
    imgUrl: 'react.svg'
  },
  {
    label: 'HTML',
    monoImg: '',
    imgUrl: 'html.svg'
  },
  {
    label: 'Javascript',
    monoImg: '',
    imgUrl: 'javascript.svg'
  },
  // {
  //   label: 'CSS',
  //   monoImg: '',
  //   imgUrl: 'css-3.svg'
  // },
  {
    label: 'SCSS',
    monoImg: '',
    imgUrl: 'scss.svg'
  }, {
    label: 'Git',
    monoImg: '',
    imgUrl: "git-icon.svg"
  },
  { label: 'Tailwind',
    monoImg: '',
    imgUrl: 'tailwindcss.svg'
  }, {
    label: 'NGXS',
    monoImg: '',
    imgUrl: 'ngxs.png'
  }, {
    label: 'Single-Spa',
    monoImg: '',
    imgUrl: 'single-spa.svg'
  }]
  constructor(private sanitizer: DomSanitizer) {
    this.tools = this.tools.map(tool => ({...tool, imgUrl: 'tools/'+tool.imgUrl}))
  }
}
