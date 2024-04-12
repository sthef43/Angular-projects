import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  activarMenuHamburguesa = signal(false)
  activarCarrito = signal(false)

  constructor() { }
}
