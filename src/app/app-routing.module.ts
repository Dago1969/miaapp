import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiancamentoComponent } from './affiancamento/affiancamento.component';
import { HomeComponent } from './home/home.component';
import { ListaSediComponent } from './lista-sedi/lista-sedi.component';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listaSedi', component: ListaSediComponent},
  {path: 'parcoAuto', component: ParcoAutoComponent},
  {path: 'noleggio', component: ParcoAutoComponent},
  {path: 'affiancamento', component: AffiancamentoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
