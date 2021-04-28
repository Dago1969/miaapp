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
  constructor(
    public repositoryStile:RepositoryStile,
    public repositoryAuto:RepositoryAuto
    ){
    this.arrAuto= repositoryAuto.getLista()
    this.arrAuto.sort((a1, a2) => (a1.marca < a2.marca ? -1 : 1))
  }

  ngOnInit(): void{}

  getClasseStile(tipo:string):string{
    return this.repositoryStile.getClasseStile(tipo)
  }
}
