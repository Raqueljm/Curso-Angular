import { Component, Inject } from '@angular/core';
import { ServiceCreateService } from '../service-create.service';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app.config';
import { CreateUrl } from '../util';
import { Spinner } from '../spinner';

const PATH = '/customer'

interface Request{
  id:number,
  name:string,
  phone:string
}

const service = (path:string)=>{
   return (http:HttpClient,url:URL)=>{      
      return new ServiceCreateService<Request>(http, CreateUrl(url,path))
   }
}


@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers:[
    {
        provide:ServiceCreateService<Request>, 
        useFactory:service(PATH),
        deps:[HttpClient,URL]
    },
        
  ]
})
export class CustomerComponent {
  constructor(private service:ServiceCreateService<Request> ){
    //this.service.create({id:1,name:"pedro hurtado", phone:"666789999"})
    //.subscribe(data=> console.log(data))
    this.create();
  }

  //@Spinner -> seria conveniente hacer un decorador para el spinner 
  /**private async create(){
    try{
      //spinner on
      const result= await this.service.create({id:1,name:"pedro hurtado", phone:"666789999"})
    }catch(err){

    }finally(){

    }
  }**/

  @Spinner()
  private async create() {   
    const result = await this.service.create({ id: 1, name: "pedro hurtado", phone: "666789999" })   
  }
}