import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListaSediComponent } from './lista-sedi/lista-sedi.component';
import { Datasource } from './Model/datasource';
import { RepositoryAuto } from './Model/repository-auto';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';
import { HomeComponent } from './home/home.component';
import { SequenzaComponent } from './sequenza/sequenza.component';
import { Stile } from './Model/stile';
import { RepositoryStile } from './Model/repository-stile';
import { RepositorySede } from './Model/repository-sede';
import { CalcolatriceComponent } from './calcolatrice/calcolatrice.component';
import { FormsModule } from '@angular/forms';
import { AffiancamentoComponent } from './affiancamento/affiancamento.component';
import { AffiancamentoChildFormComponent } from './affiancamento-child-form/affiancamento-child-form.component';
import { AffiancamentoChildTableComponent } from './affiancamento-child-table/affiancamento-child-table.component';
import { ParentComponent } from './parent_e_child/parent/parent.component';
import { ChildsinComponent } from './parent_e_child/childsin/childsin.component';
import { ChilddesComponent } from './parent_e_child/childdes/childdes.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaSediComponent,
    ParcoAutoComponent,
    HomeComponent,
    SequenzaComponent,
    CalcolatriceComponent,
    AffiancamentoComponent,
    AffiancamentoChildFormComponent,
    AffiancamentoChildTableComponent,
    ParentComponent,
    ChildsinComponent,
    ChilddesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Datasource, RepositoryAuto, RepositoryStile, RepositorySede],
  bootstrap: [AppComponent]
})
export class AppModule { }