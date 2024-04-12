import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-page-principal',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.css'
})
export class PagePrincipalComponent {

  private isActiveServices = inject(SharedService)
  isActive = this.isActiveServices.isActive

}
