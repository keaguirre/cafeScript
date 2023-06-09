import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CompraService {
  urlCompras:string = environment.urlCompras;
  urlItemCompra:string = environment.urlItemCompra
  urlItemCompraAuto:string = environment.urlItemCompraAuto
  

  constructor(private http: HttpClient) { 

  }

  //Crear compras
  crearCompra(compra: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlCompras, compra).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          if (err.status == 500){
            console.log(err.statusText)
            //internal server error
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else if(err.status == 409){
            console.log(err.statusText)
            //409 Conflict
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      });
    });
  }
    


  //Crear ItemCompra 
  crearItemCompra(itCompra: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlItemCompra, itCompra).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          if (err.status == 500){
            console.log(err.statusText)
            //internal server error
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else if(err.status == 409){
            console.log(err.statusText)
            //409 Conflict
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      });
    });
  }

  //Crear ItemCompraAuto 
  mandarItemCompraAuto(itCompra: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.urlItemCompraAuto, itCompra).subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          if (err.status == 500){
            console.log(err)
            //internal server error
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else if(err.status == 409){
            console.log(err.statusText)
            //409 Conflict
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      });
    });
  }

  
//Listar compras
  obtenerListCompra(compra:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlCompras+compra).subscribe({
        next: respuesta => {
          resolve(respuesta)
        },
        error: err => {
          if (err.status == 500){
            console.log(err.statusText)
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      }); console.log('listCompra', this.obtenerListCompra);
      
    });  
  }

  //Listar ItemCompra
  obtenerListItemCompra(itCompra:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlItemCompra+itCompra).subscribe({
        next: respuesta => {
          resolve(respuesta)
        },
        error: err => {
          if (err.status == 500){
            console.log(err.statusText)
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else {  
            // console.log(err.status)
            reject(err.status);
          }
        }
      }); console.log('listItCompra', this.obtenerListItemCompra);
    });
  }


  //Actualizar compra
  actualizarCompra(id_compra: any, estadoObj: any,): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.patch(this.urlCompras + id_compra, estadoObj)
      .subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          if (err.status == 500){ 
            console.log(err.statusText)
            //internal server error
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else if(err.status == 409){
            console.log(err.statusText)
            //409 Conflict
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      });
    });
  }

  //Actualizar ApiWatcher
  actualizarApiWatcher(id_compra: any, estadoCompra: any,): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.patch(this.urlCompras + id_compra, estadoCompra)
      .subscribe({
        next: respuesta => {
          resolve(respuesta);
        },
        error: err => {
          if (err.status == 500){ 
            console.log(err.statusText)
            //internal server error
          }
          else if(err.status == 400){
            console.log(err.statusText)
            //bad request
          }
          else if(err.status == 404){
            console.log(err.statusText)
            //404 not found
          }
          else if(err.status == 409){
            console.log(err.statusText)
            //409 Conflict
          }
          else {
            // console.log(err.status)
            reject(err.status);
          }
        }
      });
    });
  }

  


}