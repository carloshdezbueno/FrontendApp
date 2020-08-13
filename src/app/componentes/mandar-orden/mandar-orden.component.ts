import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';

@Component({
  selector: 'app-mandar-orden',
  templateUrl: './mandar-orden.component.html',
  styleUrls: ['./mandar-orden.component.css']
})
export class MandarOrdenComponent implements OnInit {

  valor = 0;
  constructor(private autService:AutentificacionService) { }

  ngOnInit(): void {
  }

  sendOrder(orden){
    this.autService.sendOrden(orden);
  }
}
