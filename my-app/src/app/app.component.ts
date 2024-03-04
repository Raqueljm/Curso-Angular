import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridComponent, CounterComponent, TimerComponent, AComponent,BComponent, CustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
user ='Raquel Jiménez'; 
array= [1,2,3];



handlerClick(ev:Event){
  ev.stopPropagation();
  this.array.push(this.array.length+1);
}
  

}


