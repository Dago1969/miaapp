import { Injectable } from "@angular/core";
import { Auto } from "./auto";

@Injectable()
export class Datasource {
    arr:Auto[] = []
    constructor(
    ){
        this.arr.push(
            new Auto(1, "1111", "159", "Alfa Romeo"),
            new Auto(2, "244","X4", "BMW"),
            new Auto(3,"3333", "GIULIA", "Alfa Romeo"),
            new Auto(4, "444","SLK", "MERCEDES")
        )
    }
    getLista():Auto[]{
        return this.arr
    }
}