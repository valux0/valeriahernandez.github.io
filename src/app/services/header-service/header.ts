import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private firestore = inject(Firestore);

  obtenerDatos(): Observable<Header[]> {
    const col = collection(this.firestore, 'header ');
    return collectionData(col) as Observable<Header[]>;
  }
}