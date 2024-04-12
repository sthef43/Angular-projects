import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isActive = signal(true)

  constructor() { }

}
