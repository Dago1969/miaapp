import { Component, OnInit } from '@angular/core';
import { StoricoTentativi } from 'src/app/storico-tentativi';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  numeroUtente!:number
  numeroPadre!:number
  distanzaNumeri!:number
  tentativi:number=0
  messaggioChildLeft!:string  
  messaggioChildRighr!:string
  arrStorico:StoricoTentativi[] = []
  dispLista:boolean=false
  constructor() {
    this.numeroPadre = Math.floor(Math.random()*100+1);
    this.distanzaNumeri= 100
   }

  ngOnInit(): void {
  }

  acquisisci(){
    if(!this.esiste(this.numeroUtente)){
      this.tentativi++
      if(Math.abs(this.numeroPadre-this.numeroUtente) == 0){
        this.messaggioChildLeft = "HAI INDOVINATO!!!!!!"      
      }  else if(Math.abs(this.numeroPadre-this.numeroUtente) < this.distanzaNumeri){
        this.messaggioChildLeft = "ti stai avvicinando"      
      }
      else 
        this.messaggioChildLeft = "ti stai allontanando"

      let storico = new StoricoTentativi(this.numeroUtente, this.messaggioChildLeft)
      this.arrStorico.push(storico)
        
      this.distanzaNumeri = Math.abs(this.numeroPadre-this.numeroUtente)
    } else
      this.messaggioChildLeft="Il numero è stato già acquisito"
  }

  gestisciEvento(event:string){
    if(event == "lista"){
      this.dispLista = !this.dispLista
    }
  }

  esiste(num:number):boolean{
    const elemento = this.arrStorico.find(x => x.numero == num)
    return elemento != undefined
  }


}
  



