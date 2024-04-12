import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  private activarMenuHamburguesaService = inject(CartService)
  isActive = this.activarMenuHamburguesaService.activarMenuHamburguesa
  activarCarrito = this.activarMenuHamburguesaService.activarCarrito

  toggleMenu(){
    this.isActive.update(prevState => !prevState)
  }
  
  toggleCart(){
    this.activarCarrito.update(prevState => !prevState)
  }
}
