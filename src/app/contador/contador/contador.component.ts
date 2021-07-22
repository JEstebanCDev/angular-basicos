import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <h3>El numero es {{ base }}</h3>

    <button (click)="argumento(base)">+{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="argumento(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;
  argumento(valor: number) {
    this.numero += valor;
  }
}
