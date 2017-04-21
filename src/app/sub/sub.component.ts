import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from './../services/main.service';



import { User } from './user.component';


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  providers: [ MainService ]
})



export class SubComponent implements OnInit {

  
  user = new User();
  uForm = new FormGroup({
     name: new FormControl('', [Validators.required]),
     email: new FormControl('', [Validators.required])
  });

  onUFormSubmit(form) {
    console.log(this.uForm)
  }

  constructor(_vars: MainService) { 
     console.log("called constrer of sub")
     console.log("Service vars", _vars.getVars());
   }

  ngOnInit() {
  	console.log("called onInit")
  }


  formSub(data) {
     console.log(data)
     console.log(this.user)
  }

}
