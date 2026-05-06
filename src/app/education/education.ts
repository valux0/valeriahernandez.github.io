import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../services/education-service/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent {
  educationService = inject(EducationService);
  // AGREGAMOS ESTA LÍNEA:
  educacion$ = this.educationService.obtenerEducacion();
}