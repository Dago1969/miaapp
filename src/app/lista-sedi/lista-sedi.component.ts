import { Component, OnInit } from '@angular/core';
import { Sede } from '../Model/sede';

@Component({
  selector: 'app-lista-sedi',
  templateUrl: './lista-sedi.component.html',
  styleUrls: ['./lista-sedi.component.css']
})
export class ListaSediComponent implements OnInit {
  
  lista:Sede[] = []
  constructor() {
    this.lista.push(
      new Sede(1, "Roma", "Piazza"),
      new Sede(2, "Milano", "Largo"),
      new Sede(3, "Genova", "lungomare"),
      new Sede(4, "Firenze", "lungoFiume"),    
      new Sede(5, "Venezia", "calla"),    
      new Sede(6, "Napoli", "spiazzo"),    
      new Sede(7, "Catania", "Piazza"),
      new Sede(8, "Torino", "Piazza"),
      new Sede(9, "Pescara", "Piazza"))
   }

  ngOnInit(): void {
  }

}
