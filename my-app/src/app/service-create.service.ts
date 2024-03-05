//import { Injectable } from '@angular/core';
//import { CustomerComponent } from './customer/customer.component';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

//@Injectable({
  //providedIn: 'root'
//})
export class ServiceCreateService<T> {

  constructor(private http:HttpClient, private url:string) {
    console.log(this.url)
    
   }

   //create(entity:T): Observable<T>{
  create(entity:T){
    return lastValueFrom(this.http.post<T>(this.url,entity)); //se convierte en una promesa
    return this.http.post<T>(this.url,entity);
    //console.log(entity);

    
    
  }

}
