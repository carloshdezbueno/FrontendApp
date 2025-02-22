import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UserIDCheckComponent } from './componentes/user-idcheck/user-idcheck.component';
import { ChangeUserIDComponent } from './componentes/change-user-id/change-user-id.component';
import { ItemTiempoComponent } from './componentes/item-tiempo/item-tiempo.component';
import { Error404Component } from './componentes/error404/error404.component';
import { MandarOrdenComponent } from './componentes/mandar-orden/mandar-orden.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    UserIDCheckComponent,
    ChangeUserIDComponent,
    ItemTiempoComponent,
    Error404Component,
    MandarOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
