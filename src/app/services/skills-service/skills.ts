import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skills/skills.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private firestore = inject(Firestore);

  obtenerSkills(): Observable<Skill[]> {
    const col = collection(this.firestore, 'skills');
    return collectionData(col) as Observable<Skill[]>;
  }
}