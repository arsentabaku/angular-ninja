import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class ReplaySubjectService {
  event = new ReplaySubject<string>(2);

  constructor() {}
}
