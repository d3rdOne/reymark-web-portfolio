import { Injectable } from '@angular/core';
import { THEME } from '../enum/enum';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  theme!: string;
  expandMenu: boolean = false;
  scrollToElement$ = new Subject();

  constructor() {
    let themeStored = this.getLocalStorageTheme();
    this.theme = themeStored ? themeStored : THEME.DARK;
    this.embedThemeToBody(this.theme);

  }

  toggleTheme() {
    switch(this.theme) {
      case THEME.DARK:
        this.theme = THEME.LIGHT;
        break;
      case THEME.LIGHT:
        this.theme = THEME.DARK;
        break;
      default:
        this.theme = THEME.LIGHT
        break;
    }
    this.embedThemeToBody(this.theme)
    this.setLocalStorageTheme(this.theme);
   }

  embedThemeToBody(theme: string) {
    if(theme === THEME.DARK) {
      document.body.classList.add(THEME.DARK);
    } else {
      document.body.classList.remove(THEME.DARK);
    }
  }

  setLocalStorageTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  getLocalStorageTheme() {
    return localStorage.getItem('theme');
  }

  toggleMenu() {
    this.expandMenu = !this.expandMenu;
  }
}
