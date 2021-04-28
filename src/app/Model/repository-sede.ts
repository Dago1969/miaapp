import { Injectable } from "@angular/core";
import { Datasource } from "./datasource";
import { Sede } from "./sede";

@Injectable()
export class RepositorySede {
    constructor(
        public datasource:Datasource
    ){}

    getLista():Sede[]{
        return this.datasource.getListaSedi()
    }
}
