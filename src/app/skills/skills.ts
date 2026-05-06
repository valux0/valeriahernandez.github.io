import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills-service/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skillsService = inject(SkillsService);
  // AGREGAMOS ESTA LÍNEA:
  skills$ = this.skillsService.obtenerSkills(); 
}