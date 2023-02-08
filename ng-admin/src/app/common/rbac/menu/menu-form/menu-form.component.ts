import {Component, Input, OnInit} from '@angular/core';
import { FormLayout } from 'ng-devui/form';
import { ModalComponent } from 'ng-devui';
import {
  BmbpMenuQueryFrom,
  BmbpMenuVo,
} from 'src/app/common/rbac/menu/menu.service';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
})
export class MenuFormComponent implements OnInit {
  @Input() data: BmbpMenuQueryFrom | undefined;
  @Input() modalInstance: ModalComponent | undefined;
  @Input() modalContentInstance: any;
  layoutDirection: FormLayout = FormLayout.Horizontal;

  menuData: BmbpMenuVo = {};

  ngOnInit(): void {
    this.menuData.menuTitle = this.data?.menuTitle;
  }
}
