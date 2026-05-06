import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService } from '../services/certificates-service/certificates';
@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.scss']
})
export class CertificatesComponent {
  certificatesService = inject(CertificatesService);
  // AGREGAMOS ESTA LÍNEA:
  certificados$ = this.certificatesService.obtenerCertificados();
}
