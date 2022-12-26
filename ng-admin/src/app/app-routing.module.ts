import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BmbpHomeComponent} from "./home/home/home.component";
import {BmbpLoginComponent} from "./home/login/login.component";
import {BmbpNotFoundComponent} from "./err/notfound/notfound.component";

const routes: Routes = [
    {path:"login",component:BmbpLoginComponent},
    {path:"home",component:BmbpHomeComponent},
    {path:"**",component:BmbpNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
