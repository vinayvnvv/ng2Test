import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubComponent } from './sub/sub.component';


const routes : Routes = [
     { path:"sub", component: SubComponent }
];

@NgModule({

	imports: [
         RouterModule.forRoot(routes)
	],
	exports:[
         RouterModule
	]
})
export class RouteModule {}
export const routingComponents = [ SubComponent ];