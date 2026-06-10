import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './component/user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ajay Angular');
}
