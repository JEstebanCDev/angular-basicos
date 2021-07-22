import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[] = ['SpiderMan','IronMan','Hulk','Thor'];
  heroeBorrado:string='';
  borrados:string[]=[];
  borrarHeroe() {
    if(this.heroes.length!==0){
      const borrado=this.heroes.shift() || '';
      this.borrados.push(borrado);
    }else{
      console.log('Nada');
    }

  }

}
