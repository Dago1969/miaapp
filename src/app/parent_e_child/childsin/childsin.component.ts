import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-childsin',
  templateUrl: './childsin.component.html',
  styleUrls: ['./childsin.component.css']
})
export class ChildsinComponent implements OnInit {
  @Input("msg")
  msg!:string

  @Output()
  ev = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  chiediLista(){
    this.ev.emit("lista")
  }

}
