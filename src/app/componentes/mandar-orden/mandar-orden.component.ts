import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';
import { RespuestaArduinoPath } from 'src/app/respuesta-arduino-path.model';

@Component({
  selector: 'app-mandar-orden',
  templateUrl: './mandar-orden.component.html',
  styleUrls: ['./mandar-orden.component.css']
})
export class MandarOrdenComponent implements OnInit {

  valor = 0;
  constructor(public autService:AutentificacionService) { }

  ngOnInit(): void {
  }

  async sendOrder(orden){
    var dato:RespuestaArduinoPath = await this.autService.sendOrden(orden);
    console.log(dato)
  }
}
