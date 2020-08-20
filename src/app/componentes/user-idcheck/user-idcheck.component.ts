import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-idcheck',
  templateUrl: './user-idcheck.component.html',
  styleUrls: ['./user-idcheck.component.css']
})
export class UserIDCheckComponent implements OnInit {

  

  userID:string;
  constructor(private autService:AutentificacionService, private router: Router) { 
    
    this.userID = this.autService.getUserID();
  }

  ngOnInit(): void {
  }

  
  refreshUserid(userID){
    this.userID = userID;
    this.router.navigate(['']);
  }
}
