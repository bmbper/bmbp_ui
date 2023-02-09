import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DFormGroupRuleDirective, FormLayout } from 'ng-devui/form';
import { ModalComponent, ToastService } from 'ng-devui';
import {
  BmbpMenuQueryFrom,
  BmbpMenuVo,
} from 'src/app/common/rbac/menu/menu.service';
import { AppMenuDict, AppMenuRouteDict } from '@app/dict';
import { AbstractControlDirective, ValidationErrors } from '@angular/forms';
import { AppMenuVo } from '@app/bmbp.types';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
})
export class MenuFormComponent implements OnInit {
  @Input() data: BmbpMenuQueryFrom | BmbpMenuVo | undefined;
  @Input() modalInstance: ModalComponent | undefined;
  @Input() modalContentInstance: any;
  layoutDirection: FormLayout = FormLayout.Horizontal;

  menuData: BmbpMenuVo = {};

  selectOptions = {
    menuRouteType: AppMenuRouteDict,
    menuType: AppMenuDict,
  };

  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    if (this.data == undefined) return;
    this.menuData.parentMenuId =
      'menuId' in this.data ? this.data.menuId : this.data.parentMenuId;
  }

  saveMenu($event: { valid: boolean; directive: any; data: any; errors: any }) {
    if ($event.valid) {
      this.toast.open({
        value: [
          {
            severity: 'info',
            summary: '提醒',
            content: JSON.stringify(this.menuData),
          },
        ],
      });
    }
  }

  onResetFormData() {
    this.menuData = { parentMenuId: this.data?.parentMenuId };
  }
}
