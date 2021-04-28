import { Component, OnInit } from '@angular/core';
import { RepositoryStile } from '../Model/repository-stile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}) 
export class HomeComponent implements OnInit {

  constructor( 
    public repositoryStile:RepositoryStile
    ) {}

  ngOnInit(): void {
  }

    getStyle(){
      let str:string
      str="bg-primary text-center text-withe p-2"
      return str
    }

    getClasseStile(tipo:string):string{
      return this.repositoryStile.getClasseStile(tipo)
    }
}
