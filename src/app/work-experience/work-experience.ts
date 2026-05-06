import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.scss']
})
export class WorkExperienceComponent {
  workService = inject(WorkExperienceService);
  // AGREGAMOS ESTA LÍNEA:
  work$ = this.workService.obtenerWork();
}