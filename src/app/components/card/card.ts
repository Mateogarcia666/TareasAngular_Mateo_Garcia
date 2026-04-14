import { Component, input, InputSignal, output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  value = input(0);

  imagen: InputSignal<string> = input('');
  titulo: InputSignal<string> = input('');
  subtitulo: InputSignal<string> = input('');
  link: InputSignal<string> = input('');
  textoLink: InputSignal<string> = input('Ver más');

  avisoQueSeClickeoLaCard = output<string>(); // La función que avisa

  cardClickeada() {
    const titulo = this.titulo();
    console.log(titulo);
    this.avisoQueSeClickeoLaCard.emit(titulo);
  }
}
