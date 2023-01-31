import {Component, Input, OnInit} from '@angular/core';
import { FormLayout } from 'ng-devui/form';
import {ModalComponent} from "ng-devui";
import {BmbpMenuQueryFrom, BmbpMenuVo} from "@app/sys/rbac/menu/menu.service";

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.scss'],
})
export class MenuformComponent  implements OnInit{
  @Input() data: BmbpMenuQueryFrom | undefined;
  @Input() modalInstance: ModalComponent | undefined;
  @Input() modalContentInstance: any;
  layoutDirection: FormLayout = FormLayout.Vertical;

  menuData : BmbpMenuVo = {};
  ngOnInit(): void {
    this.menuData.menuTitle = this.data?.menuTitle;
  }


}
