import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ChangeUserIDComponent } from './componentes/change-user-id/change-user-id.component';
import { Error404Component } from './componentes/error404/error404.component';
import { MandarOrdenComponent } from './componentes/mandar-orden/mandar-orden.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'userIDChange', component: ChangeUserIDComponent},
  {path: 'ordenes', component: MandarOrdenComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
