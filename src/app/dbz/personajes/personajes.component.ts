import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  constructor(private DbzService:DbzService){
  }

  get personajes(){
    return this.DbzService.personajes;
  }

  //@Input('data') personajes:Personaje[]=[];
}
