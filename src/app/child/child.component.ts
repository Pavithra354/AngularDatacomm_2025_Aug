import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('catchInput') userName!: string;   // definite assignment assertion

  @Output('postLocationEmitter') LocationEmitter = new EventEmitter<string>();  // emitting string values

  evtClickMe() {
    this.userName = "pavithra";
  }

  evtPostLocation() {
    this.LocationEmitter.emit("Hyderabad"); 
  }

}
