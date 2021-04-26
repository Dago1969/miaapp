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



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaSediComponent,
    ParcoAutoComponent,
    HomeComponent,
    SequenzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Datasource, RepositoryAuto],
  bootstrap: [AppComponent]
})
export class AppModule { }