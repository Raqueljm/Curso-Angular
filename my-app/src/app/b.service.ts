import { Inject, Injectable } from '@angular/core';
import { CService } from './c.service';
import { URL_SERVER } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor(cService: CService) {
 //constructor(cService: CService, @Inject(URL_SERVER) servicio:any) {
    console.log("Servicio B")
    //console.log(servicio)
   }
}
