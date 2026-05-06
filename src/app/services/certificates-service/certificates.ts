import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Certificates } from '../../models/certificates/certificates.model';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  private firestore = inject(Firestore);

  obtenerCertificados(): Observable<Certificates[]> {
    const col = collection(this.firestore, 'certificates');
    return collectionData(col) as Observable<Certificates[]>;
  }
}