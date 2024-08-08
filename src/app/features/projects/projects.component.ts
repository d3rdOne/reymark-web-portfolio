import { Component } from '@angular/core';
import { PROJECTS } from '../../../projects';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../core/layout/components/footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects= PROJECTS;
}
