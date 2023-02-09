import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmbpPortalComponent } from './portal/portal/portal.component';
import { BmbpLoginComponent } from './portal/login/login.component';
import { OrganComponent } from './common/rbac/organ/organ.component';
import { UserComponent } from './common/rbac/user/user.component';
import { MenuComponent } from './common/rbac/menu/menu.component';
import { ApiComponent } from './common/rbac/api/api.component';
import { RoleComponent } from './common/rbac/role/role.component';
import { DataComponent } from './common/rbac/data/data.component';
import { WorkBeanchComponent } from '@app/portal/work-beanch/work-beanch.component';
import { BmbpNotFoundComponent } from '@app/components/err/notfound/notfound.component';

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
