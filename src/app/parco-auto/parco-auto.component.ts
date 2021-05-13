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
  nuovaAuto:Auto= new Auto(0,"","","",0,0);
  title = 'Io sono io e voi .... ';
  arrAuto:Auto[]=[]
  val:string="pippo";
  str:string="0";
  strMarca:string="";
  importo!:number;
  idMouse!:number;
  idMouseNascondi!:number;
  idScopri!:number;
  numeroAuto!:number;
  marca!:string;
  selMarca!:string
  voceTratt:number[]=[]
  vediTable:boolean=true
  totaleImporti:number=0
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
    let qta= 0;
    this.marca = marca;
    for(let i=0; i<this.repositoryAuto.getLista().length;i++ )
      if(this.repositoryAuto.getLista()[i].marca == marca){
        tot += this.repositoryAuto.getLista()[i].prezzo
        qta ++;
      }
    this.importo = tot;
    this.numeroAuto = qta;
   return tot
  }

  
  assegna(id:number){
    //this.str= id+''
    this.idMouse = id
  }

  coincide(id:number){
      if(this.idMouse==id)
        return true
      else  
        return false
//      return this.idMouse == id;
  }

  aggiornaSelMarca(event:any){
    this.selMarca = event.target.value;
  }
  
  marcaRicercata(marca:string){
    return marca==this.selMarca;
  }

  onkeyupMarca(event:any){
    this.strMarca = event.target.value
  }

  coincideMarcaParziale(marca:string){
    if(marca.substr(0, this.strMarca.length) == this.str)
      return true
    else
    return false

  }

  includeMarcaParziale(marca:string){
    return (this.strMarca == '' || marca.toUpperCase().includes(this.strMarca.toUpperCase()))
  }

  addAuto(){
    this.repositoryAuto.addAuto(this.nuovaAuto);
    this.val= this.repositoryAuto.getLista().length+''
    this.nuovaAuto = new Auto(0,"","","",0,0);;
  }

  scegliMostraPrezzo(id:number){
    this.idMouseNascondi = id
  }

  dammiPrezzo(id:number):string{
    let autosel:Auto|undefined=this.arrAuto.find( (auto) => (auto.id==id))
    if(id == this.idMouseNascondi || (autosel !=undefined  && autosel.prezzo < 30000))
      return autosel?.prezzo+''
    else
      return 'X'
  }

  dimmiciao(id:number):string{
    return 'ciaoooo'+id
  }

  impostaIdScopri(id:number){
    this.idScopri = id
  }

  impostaVediTable(){
    this.vediTable=!this.vediTable
  }

  mostraTotale(x:number){
    x==0?this.totaleImporti=this.calcolaTotaleImporti():this.totaleImporti=0
  }

  calcolaTotaleImporti():number{
    let somma :number =0;
    this.arrAuto.forEach(auto => {somma = somma+auto.prezzo});
    return somma
  }

  getMessaggi(state: any):string[]{
    let messaggi:string[] = []
    if(state.errors)
      for(let errorName in state.errors){
        switch (errorName) {
          case "required":
            messaggi.push("Dato obbligatorio")           
            break;
          case "minlength":
            messaggi.push(`Lunghezza minima obbligatoria: ${state.errors?.minlength.requiredLength}`)           
            break;
            case "pattern":
              messaggi.push(`Ci sono caratteri non ammessi: ${state.errors?.pattern}`)           
              break;
          default:
            break;
        }
      }
      
    return messaggi;
  }


 

  ordinaColonna(colonna:string){
    switch (colonna) {
      case 'id':
        this.arrAuto.sort((a1, a2) => (a1.id < a2.id ? -1 : 1))
        break;
      case 'targa':
        this.arrAuto.sort((a1, a2) => (a1.targa < a2.targa ? -1 : 1))
        break;
      case 'modello':
        this.arrAuto.sort((a1, a2) => (a1.modello < a2.modello ? -1 : 1))
        break;
      case 'marca':
        this.arrAuto.sort((a1, a2) => (a1.marca < a2.marca ? -1 : 1))
        break;
      case 'cilindrata':
        this.arrAuto.sort((a1, a2) => (a1.cilindrata < a2.cilindrata ? -1 : 1))
        break;
      case 'prezzo':
        this.arrAuto.sort((a1, a2) => (a1.prezzo < a2.prezzo ? -1 : 1))
        break;
    
      default:
        this.arrAuto.sort((a1, a2) => (a1.marca < a2.marca ? -1 : 1))
        break;
    }
  }

 

}


