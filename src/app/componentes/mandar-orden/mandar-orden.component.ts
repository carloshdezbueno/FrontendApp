import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';

@Component({
  selector: 'app-mandar-orden',
  templateUrl: './mandar-orden.component.html',
  styleUrls: ['./mandar-orden.component.css']
})
export class MandarOrdenComponent implements OnInit {

  constructor(private autService:AutentificacionService) { }

  ngOnInit(): void {
  }

  sendOrder(){
    this.autService.sendOrden();
    console.log("Mandado");
  }
}
