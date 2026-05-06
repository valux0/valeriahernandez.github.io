import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { InterestsService } from '../services/interests-service/interests';
@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrls: ['./interests.scss']
})
export class InterestsComponent {
  interestsService = inject(InterestsService);
  // AGREGAMOS ESTA LÍNEA:
  intereses$ = this.interestsService.obtenerIntereses();
}
