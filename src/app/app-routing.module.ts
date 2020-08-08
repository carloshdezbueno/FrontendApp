import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ChangeUserIDComponent } from './componentes/change-user-id/change-user-id.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'userIDChange', component: ChangeUserIDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
