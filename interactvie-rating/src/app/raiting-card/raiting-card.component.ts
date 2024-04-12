import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, signal } from '@angular/core';
import { sign } from 'crypto';
import { env } from 'process';

@Component({
  selector: 'app-raiting-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raiting-card.component.html',
  styleUrl: './raiting-card.component.css'
})
export class RaitingCardComponent {

  enviado = true

  botones = signal([
    1,
    2,
    3,
    4,
    5
  ])


  valorInput = signal(0)
  botonSeleccionado: number|null = null

  devolverValor(opcion: number){
    this.botonSeleccionado = opcion
    console.log(this.botonSeleccionado)
    this.valorInput.set(this.botonSeleccionado)
  }
  enviarFormulario(event: Event){
    this.enviado = !this.enviado
    console.log(this.enviado)
  }
}
