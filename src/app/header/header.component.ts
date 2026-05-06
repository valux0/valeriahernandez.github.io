import { Component, inject } from '@angular/core';
import { CommonModule, AsyncPipe} from '@angular/common';
import { HeaderService } from '../services/header-service/header';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerService = inject(HeaderService);
  // AGREGAMOS ESTA LÍNEA:
  datos$ = this.headerService.obtenerDatos();

  constructor() {
    // ESTO ES PARA DEBUGEAR: Abre la consola (F12) y mira si llegan datos
    this.datos$.subscribe(data => {
      console.log("Datos del Header recibidos:", data);
    });
  }
}