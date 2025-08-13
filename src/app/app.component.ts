import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    firstName = "John";

    johnLocation = "";

    getLocation(value:any){
       console.log("Trigger from child");
       console.log(value);
       this.johnLocation = value;
    }


}