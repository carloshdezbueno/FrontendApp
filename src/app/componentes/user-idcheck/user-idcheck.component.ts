import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';

@Component({
  selector: 'app-user-idcheck',
  templateUrl: './user-idcheck.component.html',
  styleUrls: ['./user-idcheck.component.css']
})
export class UserIDCheckComponent implements OnInit {

  

  userID:string;
  constructor(private autService:AutentificacionService) { 
    this.userID = this.autService.getUserID();
  }

  ngOnInit(): void {
  }

  
  setUserID(userID){
    this.autService.setUserID(userID);
  }
}
