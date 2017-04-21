import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String;

  constructor() {
  	console.log("called constructer")
  	this.title = "vinay";
  }

  public myClassFlag = true;
  vis = true;
  list = [1,2,3,4,5]

  myFun() {
  	console.log("clicked")
  }
}
