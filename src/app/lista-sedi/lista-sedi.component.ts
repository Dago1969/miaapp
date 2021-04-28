import { Component, OnInit } from '@angular/core';
import { RepositorySede } from '../Model/repository-sede';
import { RepositoryStile } from '../Model/repository-stile';
import { Sede } from '../Model/sede';

@Component({
  selector: 'app-lista-sedi',
  templateUrl: './lista-sedi.component.html',
  styleUrls: ['./lista-sedi.component.css']
})
export class ListaSediComponent implements OnInit {
  
  lista:Sede[] = []
  constructor(
    public repositorySede:RepositorySede,
    public repositoryStile:RepositoryStile
  ) {
    this.lista= repositorySede.getLista()
   }

  ngOnInit(): void {
  }

  getClasseStile(tipo:string):string{
    return this.repositoryStile.getClasseStile(tipo)
  }

}
