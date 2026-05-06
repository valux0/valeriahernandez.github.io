import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience';
import { EducationComponent } from './education/education';
import { SkillsComponent } from './skills/skills';
import { CertificatesComponent } from './certificates/certificates';
import { LanguagesComponent } from './languages/languages';
import { InterestsComponent } from './interests/interests';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    WorkExperienceComponent, 
    EducationComponent, 
    SkillsComponent, 
    CertificatesComponent, 
    LanguagesComponent, 
    InterestsComponent
  ],
  // 1. Agregamos el esqueleto HTML aquí mismo:
  template: `
    <div class="cv-page">
      <app-header></app-header>
      
      <div class="cv-grid">
        <div class="column-left">
          <app-work-experience></app-work-experience>
          <app-education></app-education>
        </div>

        <div class="column-right">
          <app-skills></app-skills>
          <app-certificates></app-certificates>
          <app-languages></app-languages>
          <app-interests></app-interests>
        </div>
      </div>
    </div>
  `,
  // 2. CONECTAMOS CON EL SCSS (Esto es lo que te faltaba):
  styleUrls: ['./app.scss'] 
})
export class AppComponent {
  title = 'mycv';
}