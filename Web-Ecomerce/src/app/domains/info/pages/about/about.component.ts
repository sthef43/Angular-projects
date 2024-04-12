import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CounterComponent} from '../../../shared/components/counter/counter.component'
import { WaveAudioComponent } from '../../../info/components/wave-audio/wave-audio.component'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000)
  mensaje = signal('hola')

  cambiarDuracion(event: Event) {
    const  input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  cambiarMensaje(event: Event){
    const  input = event.target as HTMLInputElement
    this.mensaje.set(input.value)
  }
}
