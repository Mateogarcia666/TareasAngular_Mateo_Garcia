import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-bienvenida',
  imports: [ ],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  cards = [
    {
      titulo: 'Angular',
      subtitulo: 'Framework frontend',
      imagen: 'https://angular.io/assets/images/logos/angular/angular.png',
      link: 'https://angular.dev'
    },
    {
      titulo: 'Java',
      subtitulo: 'Lenguaje de programación',
      imagen: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
      link: 'https://www.java.com'
    },
    {
      titulo: 'Python',
      subtitulo: 'Lenguaje versátil',
      imagen: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      link: 'https://www.python.org'
    },
    {
      titulo: 'GitHub',
      subtitulo: 'Control de versiones',
      imagen: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      link: 'https://github.com'
    }
  ];

}

