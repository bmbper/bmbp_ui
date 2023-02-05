import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmbpLayoutComponent } from './layout/bmbp-layout/bmbp-layout.component';
import { BmbpLayoutTopComponent } from './layout/bmbp-layout-top/bmbp-layout-top.component';
import { BmbpLayoutCenterComponent } from './layout/bmbp-layout-center/bmbp-layout-center.component';
import { BmbpLayoutFooterComponent } from './layout/bmbp-layout-footer/bmbp-layout-footer.component';
import { BmbpLayoutLeftComponent } from './layout/bmbp-layout-left/bmbp-layout-left.component';
import { BmbpLayoutRightComponent } from './layout/bmbp-layout-right/bmbp-layout-right.component';

@NgModule({
  declarations: [
    BmbpLayoutComponent,
    BmbpLayoutTopComponent,
    BmbpLayoutCenterComponent,
    BmbpLayoutFooterComponent,
    BmbpLayoutLeftComponent,
    BmbpLayoutRightComponent,
  ],
  exports: [
    BmbpLayoutComponent,
    BmbpLayoutTopComponent,
    BmbpLayoutFooterComponent,
    BmbpLayoutLeftComponent,
    BmbpLayoutCenterComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
