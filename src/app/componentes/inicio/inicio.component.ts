import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/providers/autentificacion.service';
import { Tiempo } from 'src/app/tiempo.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  userID:string;
  datos:Tiempo[] = null;
  constructor(public autService:AutentificacionService) { 
    this.userID = this.autService.getUserID();
  }
  ngOnInit(): void {

    if(this.autService.getApiPath() == null){
      
      this.autService.setApiPath().then(()=>{

        if(this.autService.getApiPath() != "NotFound"){
          this.autService.getDatosUserID().subscribe( (datos:any) => {
          
            if(datos.data.length != 0){
              this.datos = datos.data.sort((a, b) => b.timestamp - a.timestamp );
            }
          });
        }
        
        
      });

    }else if(this.autService.getApiPath() != 'NotFound'){
      this.autService.getDatosUserID().subscribe( (datos:any) => {
          
        if(datos.data.length != 0){
          this.datos = datos.data.sort((a, b) => a - b );
        }
      });
    }

    
    
  }

}
