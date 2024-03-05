import { Component, signal } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  clickCount = signal(0)

  handlerClick(ev:Event){
    ev.stopPropagation();
    this.clickCount.update(value => value+1);
  }
}
