import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,RouterModule, DevUIModule],
  providers: [DevUIModule],
  bootstrap: [AppComponent],
})
export class AppModule {}