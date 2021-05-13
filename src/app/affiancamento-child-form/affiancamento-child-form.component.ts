import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auto } from '../Model/auto';
import { RepositoryAuto } from '../Model/repository-auto';
import { RepositoryStile } from '../Model/repository-stile';

@Component({
  selector: 'app-affiancamento-child-form',
  templateUrl: './affiancamento-child-form.component.html',
  styleUrls: ['./affiancamento-child-form.component.css']
})
export class AffiancamentoChildFormComponent implements OnInit {
  nuovaAuto:Auto= new Auto(0,"","","",0,0);
  arrAuto:Auto[]=[]
  val:string="pippo";
  formSubmitted:boolean=false
  constructor(
    public repositoryStile:RepositoryStile,
    public repositoryAuto:RepositoryAuto
    ){
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


  addAuto(form:NgForm){
    this.formSubmitted = true;
    if(form.valid){
      this.formSubmitted = false;
      this.repositoryAuto.addAuto(this.nuovaAuto);
      this.val= this.repositoryAuto.getLista().length+''
      this.nuovaAuto = new Auto(0,"","","",0,0);
      form.reset
    }
    
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


 

 

}



