import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

import { ProductComponent } from '../../products/product/product.component';
import { CommonModule } from '@angular/common';

import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent,ProductComponent],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.css'
})
export class PageMainComponent {

  private menuHamburguesaService = inject(CartService)
  fondoOsucro = this.menuHamburguesaService.activarMenuHamburguesa

}
