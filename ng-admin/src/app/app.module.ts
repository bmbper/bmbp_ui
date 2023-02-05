import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { httpInterceptorProviders, HttpService } from '@app/http.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilService } from '@app/util.service';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DevUIModule,
    HomeModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [DevUIModule, httpInterceptorProviders, HttpService, UtilService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
