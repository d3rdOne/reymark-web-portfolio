import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { LayoutService } from './layout.service';
import { THEME } from '../enum/enum';
import { FooterComponent } from './components/footer/footer.component';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, NgScrollbarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, AfterViewInit {

  @ViewChild(NgScrollbar) scrollable!: NgScrollbar;

  constructor(public layoutService: LayoutService, private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      filter(() => !!this.scrollable),
      tap(() => this.scrollable.scrollTo({top: 0, duration: 10 }))
    ).subscribe()
  }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.layoutService.scrollToElement$.subscribe((elementId) => {
      this.scrollable.scrollToElement(`#${elementId}`, {top: -50})
    })
  }
  get THEME () {
    return THEME;
  }
}
