import { Injectable } from "@angular/core";
import { Auto } from "./auto";

@Injectable()
export class Datasource {
    arr:Auto[] = []
    constructor(
    ){
        this.arr.push(
            new Auto(1, "1111", "159", "Alfa Romeo" ,1200 ,30000),
            new Auto(2, "244","X4", "BMW", 2000, 35000),
            new Auto(3,"3333", "GIULIA", "Alfa Romeo", 3500, 40000),
            new Auto(4, "444","SLK", "MERCEDES", 4000, 45000)
        )
    }
    getLista():Auto[]{
        return this.arr
    }
}