import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { sign } from 'crypto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //MENU HAMBURGUESA MOBILE
  private isActiveServices = inject(SharedService)
  isActive = this.isActiveServices.isActive
  
  features = signal(true)
  company = signal(true)


  toggleMenu(){
    this.isActive.update(prevState => !prevState)
  }
  
  toggleDropDown(value: string){
    if (value === 'features') {
      this.features.update(prevState => !prevState)
    }
    if(value === 'company') {
      this.company.update(prevState => !prevState)
    }
    console.log(value);
  }
}
