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
import { OrganService } from 'src/app/base/sys/rbac/organ/organ.service';
import { MenuService } from 'src/app/base/sys/rbac/menu/menu.service';
import { FormsModule } from '@angular/forms';
import { PropFromMapPipe, DictValuePipe } from 'src/app/pipe';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';

@NgModule({
  declarations: [
    OrganComponent,
    UserComponent,
    MenuComponent,
    ApiComponent,
    DataComponent,
    RoleComponent,
    DictValuePipe,
    PropFromMapPipe,
    MenuFormComponent,
  ],
  imports: [
    CommonModule,
    DevUIModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
  ],
  providers: [DevUIModule, LayoutModule, OrganService, MenuService],
  exports: [MenuComponent],
})
export class RbacModule {}
