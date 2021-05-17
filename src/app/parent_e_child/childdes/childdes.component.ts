import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childdes',
  templateUrl: './childdes.component.html',
  styleUrls: ['./childdes.component.css']
})
export class ChilddesComponent implements OnInit {
  @Input("tentativi")
  tentativi!:number
  constructor() { }

  ngOnInit(): void {
  }

}
