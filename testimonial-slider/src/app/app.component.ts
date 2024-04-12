import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testimonial-slider';

  next = signal(true)
  nextDesktop = signal(true)

  toggleNext(){
    this.next.update(prevStat => !prevStat)
  }
  toggleNextDesktop(){
    this.nextDesktop.update(prevState => !prevState)
  }
}
