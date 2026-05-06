import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Education } from '../../models/education/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private firestore = inject(Firestore);

  obtenerEducacion(): Observable<Education[]> {
    const col = collection(this.firestore, 'education');
    return collectionData(col) as Observable<Education[]>;
  }
}