import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input({required: true}) product!: Product

  @Output() agregarAlCarro = new EventEmitter();

  agregarAlCarroBoton(){
    console.log('Estoy haciendo click desde el hijo')
    this.agregarAlCarro.emit(this.product)
  }
}
