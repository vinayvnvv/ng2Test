import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
	getVars() {
		return [
          {name: "vinay", email:"a@dd.dd"},
          {name:"yadav", email:"aaa@ss.cpm"}
		];
	}				
}