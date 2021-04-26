import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSediComponent } from './lista-sedi/lista-sedi.component';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';

const routes: Routes = [
  //{path: '', component: ListaSediComponent},
  {path: 'listaSedi', component: ListaSediComponent},
  {path: 'parcoAuto', component: ParcoAutoComponent},
  //{path: 'prenotazione', component: ListaSediComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
