import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent implements OnInit {
 
  stringa!:string;

  constructor(    
  ) {
   
   }

  ngOnInit(): void {
  }

  somma(op1:string, op2:string):string{
    return parseFloat(op1)+parseFloat(op2)+''
  }

  sottrai(op1:string, op2:string):string{
    return parseFloat(op1)-parseFloat(op2)+''
  }

  moltiplica(op1:string, op2:string):string{
    return parseFloat(op1)*parseFloat(op2)+''
  }

  dividi(op1:string, op2:string):string{
    return parseFloat(op1)/parseFloat(op2)+''
  }

//  getEvent(event:any):string{
//    return event.target.value;
//  }

}
