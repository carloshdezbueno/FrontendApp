import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private userID:string = null;

  private pathPrincipal:string = 'http://localhost:8080';

  private apiPath:string = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) { 
    this.userID = localStorage.getItem('userID');
    //Recuperar uri de mongoDB
  }

  getUserID(){
    return this.userID;
  }

  setUserID(userID:string){
    this.userID = userID;
    localStorage.setItem('userID', userID);
  }

  getDatosUserID(){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept': '*/*'});
    const options = {
      headers: headers,
      //body: '{"userID":"' + this.userID + '"}',
      params: {
        "userID": this.userID
    }
    }; 
    return this.http.get(this.apiPath+"/getData", options);
  }

  sendOrden(){
    const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept': '*/*'});
    const options = {
        orden: "2"
    
    }; 

    return this.http.post(this.apiPath+"/sendOrder", options).subscribe();
  }
}
