import { CommonModule } from '@angular/common';
import { Component, signal  } from '@angular/core';
import { Models } from '../../shared/models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent {
  totalEnLista = signal(0)

  todoLista = signal<Models[]>([])

  textoAgregado:String = ""
  idDato:number = 1

  inputAgregarDato = new FormControl('', [
    Validators.required,
    Validators.minLength(0)
  ])

  aniadirTareas(valueTarea: any) {
    const datoTarea = valueTarea.target.value
    if (this.inputAgregarDato.valid && valueTarea.key === "Enter") {
      this.todoLista.update((agregar) => [...agregar, new Models(this.idDato += 1, datoTarea, false)])
      console.log(this.todoLista());
      this.totalEnLista.update(suma => suma + 1)
      this.inputAgregarDato.setValue('')
    }
  }

  eliminarTarea(i: number) {
    this.todoLista.update(borrar => borrar.filter((borrar, position) => position !== i))
    this.totalEnLista.update(resta => resta - 1)
    console.log(this.todoLista());
  }

  tareaCompletada(i: number) {
    this.todoLista.update((cambiarEstado) => {
      return cambiarEstado.map((cambiarEstado, index) => {
        if (index === i) {
          return {
            ...cambiarEstado,
            terminado: !cambiarEstado.terminado
          }
        }
        return cambiarEstado
      })
    })
  }


}