import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent} from './../../components/producto/producto.component'
import { Product } from '../../../shared/models/product.model'
import { HeaderComponent } from '../../../shared/components/header/header.component'
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductoComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  private cartService = inject(CartService)
  product = signal<Product[]>([])
  private productService = inject(ProductService)

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
        this.product.set(products)
      },
      error: () => {

      }
    })
  }
  
  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

}
