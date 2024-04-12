import { CommonModule } from '@angular/common';
import { Component, Input, input, signal } from '@angular/core';
import { FormControl, FormControlName, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  
  isAceptable = false
  
  numeros = signal('')

  numberCard = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(20),
      Validators.pattern(/^[0-9\s]*$/)
    ]
  })
  nameCard = new FormControl('',{
    nonNullable:true,
    validators: [
      Validators.required,
      Validators.minLength(0),
      Validators.pattern(/^[a-zA-Zn\s]+$/)
    ]
  })
  numberExp = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]
  })
  numberDateExp = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/)
    ]
  })
  numberCVC = new FormControl('',{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[0-9]*$/)
    ]
  })

  mostrarNumero(numeros: string){
    const numerosFormateado = this.numberCard.value.replace(/([0-9]{4})/g, '$1 ')
    this.numeros.set(numerosFormateado)
    this.numberCard.markAllAsTouched()

    const limpiarEspacios = numeros.replace(/\s/g, '')
    const format = limpiarEspacios.replace(/([0-9]{4})/g, '$1 ')
    console.log(format);
    this.numberCard.setValue(format)
  }

  mostrarNombre(){
    this.nameCard.markAllAsTouched()
  }

  mostrarFechaExp(){
    this.numberDateExp.markAllAsTouched()
    this.numberExp.markAllAsTouched()
  }
  mostrarNumeroCVC(){
    this.numberCVC.markAllAsTouched()
  }
  
  mostrarMensaje(){
    if(this.numberExp.valid && this.numberCard.valid && this.nameCard.valid && this.numberDateExp.valid){
      this.isAceptable = !this.isAceptable
    } else{
      this.numberCard.markAllAsTouched()
      this.nameCard.markAllAsTouched()
      this.numberDateExp.markAllAsTouched()
      this.numberExp.markAllAsTouched()
    }
    console.log(this.isAceptable)
  }
}
