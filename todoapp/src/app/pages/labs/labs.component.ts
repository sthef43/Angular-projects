import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = "Hola desde TypeScript"
  tasks = signal([
    'instalara Angula CLI',
    'Crear un Projecto',
    'Crear una lista'
  ])

  disabled = true

  persona = signal({
    nombre: 'Sthefano',
    edad: 10,
    avatar: 'http://w3schools.com/howto/img_avatar.png'
  })

  colorCTRL = new FormControl()
  tamanioCtrl = new FormControl(50, {
    nonNullable: true,
  })

  
  nameCtrl = new FormControl("name", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  })

  
  colorParrafoUltimo = "red"
  constructor() {
    this.colorCTRL.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  name = 'sthefano'

  nombreSignal = signal(this.name)
  colorParrafo = 'red'
  valorInput = signal(0)
  cambiarColor(){
    const primeroTresValores = Math.floor(Math.random()* 300)
    console.log(primeroTresValores)
  }

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event:Event){
    console.log(event);
    const input = event.target as HTMLInputElement
    console.log(input.value)
    const newValue = input.value
    this.nombreSignal.set(newValue)
  }
  changeAge(event:Event){
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.persona.update(prevState => {
      return{
        ...prevState,
        edad: parseInt(newValue,10)
      }
    })
  }
  changeName(event:Event){
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.persona.update(prevState => {
      return{
        ...prevState,
        nombre: newValue
      }
    })
  }

  keyDownHandler(event:KeyboardEvent){
    const input = event.target as HTMLInputElement
    console.log(input.value)
  }

  incrementarPedido(){
    this.valorInput.update((value) => value + 1)
  }
}
