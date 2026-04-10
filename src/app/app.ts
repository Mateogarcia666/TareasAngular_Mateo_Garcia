import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Github } from './services/github';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected http = inject(Github);

  apiUrl = 'https://api.github.com/users/';
  user = 'Mateogarcia666';

  usuarioRecibido = signal<any>(null);

  ngOnInit() {
    this.http.traer(this.apiUrl, this.user, this.usuarioRecibido);
  }

}
