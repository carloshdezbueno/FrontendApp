import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EnviarOrdenComponent } from './componentes/enviar-orden/enviar-orden.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ordenes', component: EnviarOrdenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
