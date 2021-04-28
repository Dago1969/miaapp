import { Injectable } from "@angular/core";
import { Datasource } from "./datasource";
import { Stile } from "./stile";

@Injectable()
export class RepositoryStile {
    constructor(
        public datasource:Datasource)
    {}

    getLista():Stile[]{
        return this.datasource.getListaStili();
    }

    getClasseStile(tipo:string):string
    {
        let arrayStili:Stile[] = this.getLista()
        let stile:Stile|undefined=arrayStili.find( (stile) => (stile.tipo==tipo))
        return stile ? stile.classe :""
    }
}
