import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private userID:string = null;

  constructor(private http: HttpClient) { 
    this.userID = localStorage.getItem('userID');
  }

  getUserID(){
    return this.userID;
  }

  setUserID(userID:string){
    this.userID = userID;
    localStorage.setItem('userID', userID);
  }
}
