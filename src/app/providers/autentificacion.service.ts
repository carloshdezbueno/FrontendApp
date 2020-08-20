import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaArduinoPath } from '../respuesta-arduino-path.model';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private userID: string = null;

  private pathPrincipal: string = 'http://localhost:8080';

  private apiPath: string = null;

  constructor(private http: HttpClient) {
    this.userID = localStorage.getItem('userID');
    //Recuperar uri de mongoDB
  }

  getApiPath(){
    return this.apiPath;
  }

  getUserID() {
    return this.userID;
  }

  async setApiPath(){

    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' });
    const options = {
      headers: headers,
      params: {
        "userID": this.userID
      }
    };

    var dato:RespuestaArduinoPath = await this.http.get<RespuestaArduinoPath>(this.pathPrincipal + "/getApiPath", options).toPromise();
    
    this.apiPath = dato.apiPath
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

  async sendOrden(orden:string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' });
    const options = {
      orden: orden

    };

    return await this.http.post<RespuestaArduinoPath>(this.apiPath + "/sendOrder", options).toPromise( );

  }
}
