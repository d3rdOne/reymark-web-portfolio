import { Component } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { THEME } from '../../../enum/enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleCasePipe,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public layoutService: LayoutService) {
  }

  toggleTheme() {
    this.layoutService.toggleTheme();
  }
  get THEME () {
    return THEME;
  }
}
