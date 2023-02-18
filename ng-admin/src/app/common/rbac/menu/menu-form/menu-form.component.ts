import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormLayout } from 'ng-devui/form';
import { ModalComponent } from 'ng-devui';
import { BmbpMenuVo, MenuService } from 'src/app/common/rbac/menu/menu.service';
import { AppMenuTypeDict, AppMenuRouteDict } from '@app/dict';
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

  @Output() afterFormSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  layoutDirection: FormLayout = FormLayout.Horizontal;

  menuData: BmbpMenuVo = {};

  selectOptions = {
    menuRouteType: AppMenuRouteDict,
    menuType: AppMenuTypeDict,
  };

  showRouteInfo: String = 'FUNC';

  constructor(private bmbp: BmbpService, private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuData.parentMenuId = this.data?.menuId;
  }

  saveMenu($event: { valid: boolean; directive: any; data: any; errors: any }) {
    if ($event.valid) {
      this.menuService.save(this.menuData).subscribe((vo) => {
        if (vo.code == 0) {
          this.menuData = vo.data;
          this.bmbp.info('信息', '保存成功!');
          this.modalInstance?.hide();
          this.afterFormSave.emit(true);
        } else {
          this.bmbp.error('错误', vo.msg);
        }
      });
    }
  }

  onCloseMenuForm() {
    this.modalInstance?.hide();
  }
}
