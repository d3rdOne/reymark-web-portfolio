import { Component } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { THEME } from '../../../enum/enum';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleCasePipe,CommonModule, RouterModule, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  expandMenu: boolean = false;
  constructor(public layoutService: LayoutService) {
  }

  toggleTheme() {
    this.layoutService.toggleTheme();
  }
  get THEME () {
    return THEME;
  }
}
