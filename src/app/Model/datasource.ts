import { Injectable } from "@angular/core";
import { Auto } from "./auto";
import { Sede } from "./sede";
import { Stile } from "./stile";

@Injectable()
export class Datasource {
    arr:Auto[] = []
    arrStili:Stile[] = []
    arrSedi:Sede[] = []
    constructor(
    ){
        this.arr.push(
            new Auto(1, "1111", "159", "Alfa Romeo" ,1200 ,30000),
            new Auto(2, "244","X4", "BMW", 2000, 35000),
            new Auto(3,"3333", "GIULIA", "Alfa Romeo", 3500, 40000),
            new Auto(4, "444","SLK", "MERCEDES", 4000, 45000)
        )
        this.arrStili.push(
            new Stile("titolo", "bg-primary text-center text-withe p-2"),
            new Stile("titoloSuccess", "bg-success text-center text-withe p-2"),
            new Stile("tabella", "table table-sm table-bordered"),            
            new Stile("testataTabella", "bg-warning p-4"),
            new Stile("elementoTabella", "bg-info p-2"),
            new Stile("elementoTabellaPrimary", "bg-primary p-2")
        )
        this.arrSedi.push(
            new Sede(1, "Roma", "Piazza"),
            new Sede(2, "Milano", "Largo"),
            new Sede(3, "Genova", "lungomare"),
            new Sede(4, "Firenze", "lungoFiume"),    
            new Sede(5, "Venezia", "calla"),    
            new Sede(6, "Napoli", "spiazzo"),    
            new Sede(7, "Catania", "Piazza"),
            new Sede(8, "Torino", "Piazza"),
            new Sede(9, "Pescara", "Piazza"))
    }
    getLista():Auto[]{
        return this.arr
    }

    getListaStili():Stile[]{
        return this.arrStili;
    }

    getListaSedi():Sede[]{
        return this.arrSedi;
    }

}