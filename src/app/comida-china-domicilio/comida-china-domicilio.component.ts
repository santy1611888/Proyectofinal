import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { comidaC } from '../model/china.model';
@Component({
  selector: 'comida-china-domicilio',
  templateUrl: './comida-china-domicilio.component.html',
  styleUrls: ['./comida-china-domicilio.component.css']
})
export class ComidaChinaDomicilioComponent implements OnInit {

  private domicilioACrear:comidaC;

  constructor(private http:Http) {
    this.domicilioACrear = new comidaC();
   }

  ngOnInit() {
  }


  public guardarDomicilio()
  {
    this.http.post(
      "http://taller2_web2.net16.net/Comidas/comidas.php",
      this.domicilioACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Domicilio guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el Domicilio");
      }
    });

      
  }


}
