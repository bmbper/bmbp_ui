import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmbpPortalComponent } from './portal/portal.component';
import { BmbpLoginComponent } from './login/login.component';
import { DevUIModule } from 'ng-devui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RbacModule } from '@app/common/rbac/rbac.module';
import { PortalService } from '@app/portal/portal/portal.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './portal/header/header.component';
import { LogoComponent } from './portal/header/logo/logo.component';
import { NavComponent } from './portal/header/nav/nav.component';
import { SetComponent } from './portal/header/set/set.component';
import { ComponentsModule } from '@app/components/components.module';
import { WorkBeanchComponent } from './work-beanch/work-beanch.component';

@NgModule({
  declarations: [
    BmbpPortalComponent,
    BmbpLoginComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SetComponent,
    WorkBeanchComponent,
  ],
  imports: [
    CommonModule,
    DevUIModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    RbacModule,
  ],
  providers: [DevUIModule, PortalService],
})
export class PortalModule {}
