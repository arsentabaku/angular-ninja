import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BehaviorSubjectService {
  event = new BehaviorSubject<string>('Default string');

  constructor() {}
}
