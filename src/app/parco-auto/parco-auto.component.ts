import { Component, OnInit } from '@angular/core';
import { Auto } from '../Model/auto';
import { RepositoryAuto } from '../Model/repository-auto';
import { RepositoryStile } from '../Model/repository-stile';

@Component({
  selector: 'app-root',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.css']
})
export class ParcoAutoComponent implements OnInit {
  title = 'Io sono io e voi .... ';
  arrAuto:Auto[]=[]
  val:string="pippo";
  str:string="0";
  importo!:number;
  idMouse!:number
  constructor(
    public repositoryStile:RepositoryStile,
    public repositoryAuto:RepositoryAuto
    ){
      this.val= repositoryAuto.getLista().length+''
    this.arrAuto= repositoryAuto.getLista()
    this.arrAuto.sort((a1, a2) => (a1.marca < a2.marca ? -1 : 1))
  }

  ngOnInit(): void{}

  getClasseStile(tipo:string):string{
    return this.repositoryStile.getClasseStile(tipo)
  }
  getClasseStileAlternato(tipo:string, indice:number):string{
    return indice%2==1?this.getClasseStile(tipo):""
   }
   getClasseStileAlternato2(tipo:string, disp:boolean):string{
    return disp?this.getClasseStile(tipo):""
   }

   getTot(){
     let tot= 0;
     for(let i=0; i<this.repositoryAuto.getLista().length;i++ )
     tot += this.repositoryAuto.getLista()[i].prezzo
    return tot
   }

   getTot2(indice:number){
    let tot= 0;
    let auto:Auto|undefined=this.repositoryAuto.getLista().find( (auto) => (auto.id==indice))
    let marca:string|undefined
    marca =auto?.marca
    for(let i=0; i<this.repositoryAuto.getLista().length;i++ )
      if(this.repositoryAuto.getLista()[i].marca == marca)
        tot += this.repositoryAuto.getLista()[i].prezzo
    this.importo = tot;
   return tot
  }

  getTot2A(indice:number){
    let tot= 0;
    let auto:Auto|undefined=this.repositoryAuto.getLista()[indice]
    let marca:string|undefined
    marca =auto?.marca
    for(let i=0; i<this.repositoryAuto.getLista().length;i++ )
      if(this.repositoryAuto.getLista()[i].marca == marca)
        tot += this.repositoryAuto.getLista()[i].prezzo
    this.importo = tot;
   return tot
  }


  getTot3(marca:string){
    let tot= 0;
    for(let i=0; i<this.repositoryAuto.getLista().length;i++ )
      if(this.repositoryAuto.getLista()[i].marca == marca)
        tot += this.repositoryAuto.getLista()[i].prezzo
    this.importo = tot;
   return tot
  }

  
  assegna(id:number){
    this.str= id+''
    this.idMouse = id
  }

  coincide(id:number){
      if(this.idMouse==id)
        return true
      else  
        return false
  }
  

}
