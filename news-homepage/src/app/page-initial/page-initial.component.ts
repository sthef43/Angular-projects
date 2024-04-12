import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-page-initial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-initial.component.html',
  styleUrl: './page-initial.component.css'
})
export class PageInitialComponent {

  mostrarMenu = signal(true)

  activarMenu(){
    this.mostrarMenu.update(preState => !preState)
    console.log(this.mostrarMenu())
  }
}
