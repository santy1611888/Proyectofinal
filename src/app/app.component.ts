import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { comidaC } from './model/china.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   comidaList:Array<comidaC> =new Array<comidaC>();

   constructor(private http:Http){

  }

  listarDomicilio(){
    this.http
    .get("http://taller2_web2.net16.net/Comidas/comidas.php")
    .subscribe((response)=>{
      this.comidaList = response.json();
      console.log(this.comidaList);
      let listarDomicilios = document.getElementById("listarDomicilios");
    });
  }

}
