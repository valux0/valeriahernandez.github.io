import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Interests } from '../../models/interests/interests.model';

@Injectable({ providedIn: 'root' })
export class InterestsService {
  private firestore = inject(Firestore);

  obtenerIntereses(): Observable<Interests[]> {
    const col = collection(this.firestore, 'interests');
    return collectionData(col) as Observable<Interests[]>;
  }
}
