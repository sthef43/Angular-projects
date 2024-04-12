import { Component, inject, signal } from '@angular/core';

import { CartService } from '../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  private activarHeader = inject(CartService)
  activarCarrito = this.activarHeader.activarCarrito

  cantidadProduct = signal(0)
  cantidadFotos = signal(1)
  cambiarFotos = signal(false)

  margen = -0
  suma = 375


  togglePhotos(value: String){
    if (value === 'next'){
      this.margen += -375
      this.cantidadFotos.update(prevStat => prevStat + 1)
    }
    if (value === 'prev'){
      this.margen -= -375
      this.cantidadFotos.update(prevStat => prevStat - 1)
    }
  }

  cantProduct(value:string){
    if (value === 'sumar'){
      this.cantidadProduct.update(prevState => prevState + 1)
    }
    if (value === 'restar'){
      this.cantidadProduct.update(prevState => prevState - 1)
    }
  }
}
