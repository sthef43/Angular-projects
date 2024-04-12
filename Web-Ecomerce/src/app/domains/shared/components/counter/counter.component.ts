import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';
import { ProductoComponent } from '../../../products/components/producto/producto.component'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule,ProductoComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input ({required: true}) duration = 0
  @Input ({required: true}) mensaje = ''
  counter = signal(0)
  counterRef: number|undefined

  constructor() {
    //NO ASYNC
    //Antes del renderizado
    ////corre una vez
    console.log('constructor')
    console.log('-'.repeat(10))

  } 

  ngOnChanges(changes: SimpleChanges){
    //Antes y durante el renderizado 
    //corre durante todo el renderizado
    console.log('ngOnCHanges')
    console.log('-'.repeat(10))
    console.log(changes)
    const duration = changes['duration'];
    if (duration && duration.currentValue != duration.previousValue){
      this.doSomething()
    }
  }

  ngOnInit() {
    //Antes del render
    //Solo corre una vez
    console.log('NgOnInit')
    console.log('-'.repeat(10))
    console.log('duration =>', this.duration)
    console.log('mensaje =>', this.mensaje)
    this.counterRef = window.setInterval(() =>{
      console.log('run interval')
      this.counter.update(stateprev => stateprev  + 1)
    }, 1000)
  }

  ngAfterViewInit(){
    //Antes del render
    //Sirve para ver si los hijos ya fueron renderizados
    console.log('AfterViewInit')
    console.log('-'.repeat(10))
  }

  ngOnDestroy(){
    console.log('NgOnDestroy')
    console.log('-'.repeat(10))
    window.clearInterval(this.counterRef)
  }

  doSomething(){
    console.log('change duration')
  }
}
