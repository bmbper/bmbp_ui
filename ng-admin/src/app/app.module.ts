import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,RouterModule, DevUIModule,HomeModule],
  providers: [DevUIModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
