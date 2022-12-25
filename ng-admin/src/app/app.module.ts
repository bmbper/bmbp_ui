import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DevUIModule],
  providers: [DevUIModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
