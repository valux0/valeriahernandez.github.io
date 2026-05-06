import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Languages } from '../../models/languages/languages.model';

@Injectable({ providedIn: 'root' })
export class LanguagesService {
  private firestore = inject(Firestore);

  obtenerIdiomas(): Observable<Languages[]> {
    const col = collection(this.firestore, 'languages');
    return collectionData(col) as Observable<Languages[]>;
  }
}