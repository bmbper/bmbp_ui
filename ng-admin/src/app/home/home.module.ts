import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BmbpHomeComponent} from "./home/home.component";
import {BmbpLoginComponent} from "./login/login.component";
import {DevUIModule} from "ng-devui";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [BmbpHomeComponent,BmbpLoginComponent],
  imports: [
    CommonModule,DevUIModule,RouterModule,BrowserAnimationsModule
  ],
  providers: [DevUIModule],
})
export class HomeModule { }
