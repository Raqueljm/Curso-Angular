import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Injector, PLATFORM_ID, effect, signal } from '@angular/core';

const getTime = (date:Date)=>{
  let options= {hour: 'numeric', minute:'numeric', second:'numeric'};
  return new Intl.DateTimeFormat('es-ES',options as Intl.DateTimeFormatOptions).format(date);
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  time = signal(this.formatDate())
  isBrowser = true;
  /**constructor(){
      effect((onCleanup)=>{
      const handle= setInterval(()=> this.time.set(this.formatDate()) ,5000)

      onCleanup(()=>{
        clearInterval(handle);
      });
      
    });
    

  }**/

  constructor(private injector: Injector, @Inject(PLATFORM_ID) platformId:Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**initializeLogging(): void {
    effect((onCleanup) => {
      const handle= setInterval(()=> this.time.set(this.formatDate()) ,1000)

      onCleanup(()=>{
        clearInterval(handle);
      });
    }, {injector: this.injector});
  }**/

  ngOnInit():void{
    effect((onCleanup) => {
      if (this.isBrowser){
      const handle= setInterval(()=> this.time.set(this.formatDate()) ,1000)

      onCleanup(()=>{
        clearInterval(handle);
      });
    }
    }, {injector: this.injector});
  }

  /**ngAfterViewInit(){
    effect((onCleanup)=>{
      const handle= setInterval(()=> this.time.set(this.formatDate()) ,1000)

      onCleanup(()=>{
        clearInterval(handle);
      });
      
    });

  }*/

  private getDate(){
    return new Date();
  }

  private formatDate(){
    const date= this.getDate();
    let options= {hour: 'numeric', minute:'numeric', second:'numeric'};
    return new Intl.DateTimeFormat('es-ES',options as Intl.DateTimeFormatOptions).format(date);

  }

}
