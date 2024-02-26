import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventEmitterService {
  event = new EventEmitter<string>();

  constructor() {}
}
