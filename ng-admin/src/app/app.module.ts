import { DevUIModule } from 'ng-devui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PortalModule } from './portal/portal.module';
import { httpInterceptorProviders, HttpService } from '@app/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '@app/./components/components.module';
import { BmbpService } from '@app/bmbp.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DevUIModule,
    PortalModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [DevUIModule, httpInterceptorProviders, HttpService, BmbpService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
