import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmbpHomeComponent } from './home/home/home.component';
import { BmbpLoginComponent } from './home/login/login.component';
import { BmbpNotFoundComponent } from './base/err/notfound/notfound.component';
import { OrganComponent } from './base/sys/rbac/organ/organ.component';
import { UserComponent } from './base/sys/rbac/user/user.component';
import { MenuComponent } from './base/sys/rbac/menu/menu.component';
import { ApiComponent } from './base/sys/rbac/api/api.component';
import { RoleComponent } from './base/sys/rbac/role/role.component';
import { DataComponent } from './base/sys/rbac/data/data.component';

const routes: Routes = [
  { path: 'login', component: BmbpLoginComponent },
  {
    path: 'home',
    component: BmbpHomeComponent,
    children: [
      {
        path: 'sys/rbac/organ',
        component: OrganComponent,
      },
      {
        path: 'sys/rbac/user',
        component: UserComponent,
      },
      {
        path: 'sys/rbac/menu',
        component: MenuComponent,
      },
      {
        path: 'sys/rbac/role',
        component: RoleComponent,
      },
      {
        path: 'sys/rbac/api',
        component: ApiComponent,
      },
      {
        path: 'sys/rbac/data',
        component: DataComponent,
      },
    ],
  },
  { path: '**', component: BmbpNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
