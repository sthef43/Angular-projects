import { Component, Injector, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import {Task} from '../models/task.model'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([])

  filtro = signal<'all'|'pending'|'completed'>('all')
  tareasPorFiltro = computed(() => {
    const filtro = this.filtro()
    const tarea = this.tasks()
    if (filtro === 'pending'){
      return tarea.filter(task => !task.completed)
    }
    if (filtro === 'completed'){
      return tarea.filter(task => task.completed)
    }
    return this.tasks()
  })

  newTaskCtrl = new FormControl('',{
    nonNullable : true,
    validators: [
      Validators.required,
      //Forma mas compleja de no admitir espacios en la creacion de nuevas tareas
      Validators.pattern('^\\S.*$')
    ]
  });

  injector = inject(Injector)

  
  ngOnInit(){
    const storage = localStorage.getItem('tasks')
    if (storage){
      const task = JSON.parse(storage)
      this.tasks.set(task)
    }
    this.trackearTareas()
  }

  trackearTareas () {
    effect(() => {
      const tasks = this.tasks()
      console.log(tasks )
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, { injector: this.injector })
  }

  changeHandler() {
    if (this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value.trim()
      if (value !== ""){
        this.addTask(value)
        this.newTaskCtrl.setValue('')
      }
    }
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((tasks, position) => position !== index))
  }

  updateTaks(index:number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  updateTaksModoEdicion(index: number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: true
          }
        }
        return {
          ...task,
          editing: false
        }
      })
    })
  }

  updateTaksTitulo(index: number, event: Event){
    const input = event.target as HTMLInputElement
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false
          }
        }
        return task
      })
    })
  }

  cambioDeFiltro(filter:'all'|'pending'|'completed'){
    this.filtro.set(filter)
  }
}

