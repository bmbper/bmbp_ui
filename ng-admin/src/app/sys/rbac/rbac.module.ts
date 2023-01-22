import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganComponent } from './organ/organ.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { ApiComponent } from './api/api.component';
import { DataComponent } from './data/data.component';
import { RoleComponent } from './role/role.component';
import { DevUIModule, LayoutModule } from 'ng-devui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganService } from '@app/sys/rbac/organ/organ.service';
import { MenuService } from '@app/sys/rbac/menu/menu.service';

@NgModule({
  declarations: [
    OrganComponent,
    UserComponent,
    MenuComponent,
    ApiComponent,
    DataComponent,
    RoleComponent,
  ],
  imports: [
    CommonModule,
    DevUIModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [DevUIModule, LayoutModule, OrganService, MenuService],
})
export class RbacModule {}
