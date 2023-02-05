import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmbpHomeComponent } from './home/home.component';
import { BmbpLoginComponent } from './login/login.component';
import { DevUIModule } from 'ng-devui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RbacModule } from '../base/sys/rbac/rbac.module';
import { HomeService } from '@app/home/home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { LogoComponent } from './home/header/logo/logo.component';
import { NavComponent } from './home/header/nav/nav.component';
import { SetComponent } from './home/header/set/set.component';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
  declarations: [
    BmbpHomeComponent,
    BmbpLoginComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SetComponent,
  ],
  imports: [
    CommonModule,
    DevUIModule,
    RouterModule,
    BrowserAnimationsModule,
    RbacModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [DevUIModule, HomeService],
})
export class HomeModule {}
