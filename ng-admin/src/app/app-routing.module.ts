import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmbpPortalComponent } from './portal/portal/portal.component';
import { BmbpLoginComponent } from './portal/login/login.component';
import { BmbpNotFoundComponent } from './components/err/notfound/notfound.component';
import { OrganComponent } from './common/rbac/organ/organ.component';
import { UserComponent } from './common/rbac/user/user.component';
import { MenuComponent } from './common/rbac/menu/menu.component';
import { ApiComponent } from './common/rbac/api/api.component';
import { RoleComponent } from './common/rbac/role/role.component';
import { DataComponent } from './common/rbac/data/data.component';
import { WorkBeanchComponent } from '@app/portal/work-beanch/work-beanch.component';

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
        path: 'msg/common/organ',
        component: OrganComponent,
      },
      {
        path: 'msg/common/user',
        component: UserComponent,
      },
      {
        path: 'msg/common/menu',
        component: MenuComponent,
      },
      {
        path: 'msg/common/role',
        component: RoleComponent,
      },
      {
        path: 'msg/common/api',
        component: ApiComponent,
      },
      {
        path: 'msg/common/data',
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
