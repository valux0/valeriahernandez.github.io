import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Work } from '../../models/work-experience/work-experience.model';

@Injectable({ providedIn: 'root' })
export class WorkExperienceService {
  private firestore = inject(Firestore);

  obtenerWork(): Observable<Work[]> {
    const col = collection(this.firestore, 'work-experience');
    return collectionData(col) as Observable<Work[]>;
  }
}