import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../services/languages-service/languages';
@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrls: ['./languages.scss']
})
export class LanguagesComponent {
  languagesService = inject(LanguagesService);
  // AGREGAMOS ESTA LÍNEA:
  idiomas$ = this.languagesService.obtenerIdiomas ();
}

