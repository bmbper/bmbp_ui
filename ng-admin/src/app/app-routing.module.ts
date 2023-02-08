import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmbpPortalComponent } from './home/portal/portal.component';
import { BmbpLoginComponent } from './home/login/login.component';
import { BmbpNotFoundComponent } from './components/err/notfound/notfound.component';
import { OrganComponent } from './rbac/sys/rbac/organ/organ.component';
import { UserComponent } from './rbac/sys/rbac/user/user.component';
import { MenuComponent } from './rbac/sys/rbac/menu/menu.component';
import { ApiComponent } from './rbac/sys/rbac/api/api.component';
import { RoleComponent } from './rbac/sys/rbac/role/role.component';
import { DataComponent } from './rbac/sys/rbac/data/data.component';
import { WorkBeanchComponent } from '@app/home/work-beanch/work-beanch.component';

const routes: Routes = [
  { path: 'login', component: BmbpLoginComponent },
  {
    path: 'portal',
    component: BmbpPortalComponent,
    children: [
      {
        path: 'workbench',
        component: WorkBeanchComponent,
      },
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
