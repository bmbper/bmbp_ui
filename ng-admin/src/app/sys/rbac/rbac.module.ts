import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganComponent } from './organ/organ.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { ApiComponent } from './api/api.component';
import { DataComponent } from './data/data.component';
import { RoleComponent } from './role/role.component';
import {DevUIModule, LayoutModule} from "ng-devui";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    OrganComponent,
    UserComponent,
    MenuComponent,
    ApiComponent,
    DataComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,DevUIModule,RouterModule,BrowserAnimationsModule,LayoutModule
  ],
  providers:[DevUIModule,LayoutModule]
})
export class RbacModule { }
