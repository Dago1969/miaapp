import { Injectable } from "@angular/core";
import { Auto } from "./auto";
import { Datasource } from "./datasource";

@Injectable()
export class RepositoryAuto {
    constructor(
        public datasource:Datasource)
    {
        
    }
    getLista():Auto[]{
        return this.datasource.getLista()
    }

    addAuto(auto:Auto){
        this.datasource.addAuto(auto);
    }
}
