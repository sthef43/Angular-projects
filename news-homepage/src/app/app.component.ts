import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageInitialComponent } from './page-initial/page-initial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PageInitialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-homepage';

  headers = signal(true)
}
