import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FirebaseEndpointManagerService {

  urlEndpoint: string = "";
  constructor() { 
    this.cargarEndpoint();
  }

  guardarEndpoint(){
    console.log("Entre en guardar")
    Swal.fire({
      title: 'Ingresa tu endpoint de firebase (Ej: xxx.firebaseio.com/)',
      input: 'text',
      inputValue:this.urlEndpoint,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
    }).then((result: any) => {
      if (result.value){
        localStorage.setItem('firebase_endpoint', result.value);
        this.cargarEndpoint();
      }
    })
  }

  cargarEndpoint(){
    if (localStorage.getItem('firebase_endpoint')){
      this.urlEndpoint = localStorage.getItem('firebase_endpoint');
    }else{
      this.urlEndpoint = "";
    }
  }
}
