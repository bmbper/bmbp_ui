import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { httpInterceptorProviders, HttpService } from '@app/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DevUIModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [DevUIModule, httpInterceptorProviders, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
