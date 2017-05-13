import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'app works!';
public title:string;
public description:string;


  constructor(){
    this.title = "App-Favoritos";
    this.description = "Web App con MEAN Stack";
  }
}
