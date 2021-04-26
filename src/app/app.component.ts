import { Component } from '@angular/core';
import { Auto } from './Model/auto';
import { RepositoryAuto } from './Model/repository-auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Io sono io e voi .... ';
  arrAuto:Auto[]=[]
  constructor(
    public repositoryAuto:RepositoryAuto){
    this.arrAuto= repositoryAuto.getLista()
    this.arrAuto.sort((a1, a2) => (a1.marca < a2.marca ? -1 : 1))
  }
}
