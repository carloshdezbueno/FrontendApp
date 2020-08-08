import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  userID:string;
  constructor(private autService:AutentificacionService) { 
    this.userID = this.autService.getUserID();
  }
  ngOnInit(): void {
  }

}
