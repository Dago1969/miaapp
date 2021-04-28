import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequenza',
  templateUrl: './sequenza.component.html',
  styleUrls: ['./sequenza.component.css']
})
export class SequenzaComponent implements OnInit {
  arr:number[] = []
  constructor() { 
    for (let i=1; i<=10; i++)
      this.arr.push(Math.floor(Math.random()*90+1));
      this.arr.sort((a1, a2) => (a1 < a2 ? -1 : 1))
  }
  getClass(x:number){
    return this.contaDuplicati(x)>1?"bg-warning":"bg-success"
  }
  contaDuplicati(x:number){
    let ret=0
    for (let i=0; i<this.arr.length; i++)
      if (this.arr[i] == x)
        ret++
    return ret
  }
  ngOnInit(): void {
  }

}

   