import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';



@Component({
  selector: 'app-change-user-id',
  templateUrl: './change-user-id.component.html',
  styleUrls: ['./change-user-id.component.css']
})
export class ChangeUserIDComponent implements OnInit {

  userID:string;

  cambiado:Boolean = false;

  @Output() refreshUserID:EventEmitter<string> = new EventEmitter<string>();

  constructor(private autService:AutentificacionService) { 
    this.userID = this.autService.getUserID();
  }

  ngOnInit(): void {
  }

  
  setUserID(userID){
    this.autService.setUserID(userID);
    this.refreshUserID.emit(userID);
    this.cambiado = true;
  }

}
