import { Component, signal, inject } from '@angular/core';
import { Github } from '../../services/github';
import { Card } from '../../components/card/card'

@Component({
  selector: 'app-perfil',
  imports: [Card],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  protected http = inject(Github);

  apiUrl = 'https://api.github.com/users/';
  user = 'Mateogarcia666';

  usuarioRecibido = signal<any>(null);

  ngOnInit() {
    this.http.traer(this.apiUrl, this.user, this.usuarioRecibido);
  }

  libro = {
    titulo: 'Harry Potter y la piedra filosofal',
    subtitulo: 'J.K. Rowling',
    imagen: 'https://covers.openlibrary.org/b/id/7984916-M.jpg',
    link: 'https://openlibrary.org/works/OL82563W/Harry_Potter_and_the_Philosopher%27s_Stone'
};

}


