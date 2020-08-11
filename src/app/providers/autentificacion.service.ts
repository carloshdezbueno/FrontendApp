import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private userID: string = null;

  private pathPrincipal: string = 'http://localhost:8080';

  private apiPath: string = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {
    this.userID = localStorage.getItem('userID');
    //Recuperar uri de mongoDB

    if(this.userID != null || this.userID != ""){

      this.setApiPath();
    }
  }

  getUserID() {
    return this.userID;
  }

  setApiPath(){

    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' });
    const options = {
      headers: headers,
      params: {
        "userID": this.userID
      }
    };

    this.http.get(this.pathPrincipal + "/getApiPath", options).subscribe( (datos:any)=> {
      this.apiPath = datos.apiPath;
      console.log(this.apiPath)

      //Borrar al acabar
      this.apiPath = "http://192.168.1.108:8080/v1"
      //Borrar al acabar

    } );
  }


  setUserID(userID: string) {
    this.userID = userID;
    localStorage.setItem('userID', userID);
    this.setApiPath();
  }

  getDatosUserID() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' });
    const options = {
      headers: headers,
      //body: '{"userID":"' + this.userID + '"}',
      params: {
        "userID": this.userID
      }
    };
    return this.http.get(this.apiPath + "/getData", options);
  }

  sendOrden() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' });
    const options = {
      orden: "2"

    };

    return this.http.post(this.apiPath + "/sendOrder", options).subscribe();
  }
}
