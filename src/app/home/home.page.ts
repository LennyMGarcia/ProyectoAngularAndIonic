import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cedula:string="";
  nombre:string="";
  apellido:string="";
  foto:string="";
  fecha:string="";
  rs_ok=false;

  rs_error = false;

  async consultar(){
    /*Fetch  pide y espera una peticion al servidor luego de ser consultado la url con la cedula
    luego esta espera y guarda la respuesta en un JSON
    
    luego marca los datos con los respectivos datos del JSON de la web declarados en las variables de alla arriba y verifica si la peticion es corrrecta
    si lo es la manda, si no lo es marca error y en HTML marca el error del H4*/ 
    let url = "https://api.adamix.net/apec/cedula/"+this.cedula;

    let respuesta = await fetch(url);
    let datos = await respuesta.json();
    this.rs_ok=false;
    this.rs_error=false;

    if(datos.ok){
      this.nombre=datos.Nombres;
      this.apellido=datos.Apellido1 + " " + datos.Apellido2;
      this.foto = datos.foto;
      this.fecha= datos.FechaNacimiento;
      this.rs_ok=true;
    }
    else{
      this.rs_error= true;
    }
  }
  
  cambiando(){
    this.rs_error=false;
    this.rs_ok=false;
  }

  constructor() {}

}
