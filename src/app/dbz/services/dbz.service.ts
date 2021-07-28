import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class  DbzService{

  private _personajes:Personaje[]=[
    {
      nombre:'Vegeta',
      poder:13000
    },
    {
      nombre:'Goku',
      poder:8000
    }
  ];

  get personajes():Personaje[]{
    return [...this._personajes];
  }

  constructor(){
  }

  agregarPersonajes (Personaje:Personaje){
    this._personajes.push(Personaje);
  }

}
