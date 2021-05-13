import { Component, OnInit } from '@angular/core';
import { RepositoryAuto } from '../Model/repository-auto';

@Component({
  selector: 'app-affiancamento',
  templateUrl: './affiancamento.component.html',
  styleUrls: ['./affiancamento.component.css']
})
export class AffiancamentoComponent implements OnInit {

  constructor(public repositoryAuto:RepositoryAuto) { }

  ngOnInit(): void {
  }

}
