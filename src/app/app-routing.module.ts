import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComprasComponent} from "./compras/compras.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {path: '', component: ComprasComponent},
  {path: 'cervezas', component: ComprasComponent},
  {path: 'about',component: AboutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
