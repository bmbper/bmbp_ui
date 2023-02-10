import { Component, Input, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui/form';
import { ModalComponent } from 'ng-devui';
import { BmbpMenuVo, MenuService } from 'src/app/common/rbac/menu/menu.service';
import { AppMenuDict, AppMenuRouteDict } from '@app/dict';
import { BmbpService } from '@app/bmbp.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
})
export class MenuFormComponent implements OnInit {
  @Input() data: BmbpMenuVo = {};
  @Input() modalInstance: ModalComponent | undefined;
  @Input() modalContentInstance: any;
  layoutDirection: FormLayout = FormLayout.Horizontal;

  menuData: BmbpMenuVo = {};

  selectOptions = {
    menuRouteType: AppMenuRouteDict,
    menuType: AppMenuDict,
  };

  constructor(private bmbp: BmbpService, private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuData.parentMenuId = this.data?.menuId;
  }

  saveMenu($event: { valid: boolean; directive: any; data: any; errors: any }) {
    if ($event.valid) {
      this.menuService.save(this.menuData).subscribe((vo) => {
        if (vo.code == 0) {
          this.menuData = vo.data;
        } else {
          this.bmbp.error('错误', vo.msg);
        }
      });
    }
  }

  onResetFormData() {
    this.menuData = { parentMenuId: this.data?.menuId };
  }
}
