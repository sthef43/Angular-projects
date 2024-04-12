import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.css'
})
export class FormCardComponent {

  isValid = false

  email = new FormControl('',{
    nonNullable:true,
    validators: [
      Validators.required,
      Validators.email
    ]
  })

  mostrarMensaje(){
    console.log(this.email.status)

    if (this.email.valid){
      this.isValid = !this.isValid
      console.log(this.isValid)
    } else{
      this.email.markAllAsTouched()
    }
  }

  alerta(){
    alert('doksood')
  }
}
