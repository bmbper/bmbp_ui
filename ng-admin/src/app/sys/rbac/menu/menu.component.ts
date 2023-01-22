import { Component } from '@angular/core';
import { BmbpMenuVo, MenuService } from '@app/sys/rbac/menu/menu.service';
import {
  BmbpGrid,
  BmbpGridFieldType,
  BmbpTreeConfig,
  CrudService,
} from '@app/vo';
import { TreeNode } from 'ng-devui';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements CrudService {
  menuTreeData: BmbpMenuVo[] = [];

  menuTreeConfig: BmbpTreeConfig = {
    nodeTitle: 'menuTitle',
    nodeKey: 'menuId',
    nodeChildren: 'children',
  };

  menuGrid: BmbpGrid<BmbpMenuVo> = {
    config: {
      borderType: 'bordered',
    },
    columns: [
      {
        header: '资源名称',
        field: 'menuTitle',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '资源类型',
        field: 'menuRouteType',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '资源地址',
        field: 'menuRoute',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '资源路径',
        field: 'menuPath',
        fieldType: BmbpGridFieldType.Text,
      },
    ],
    data: {
      total: 0,
      pageSize: 20,
      pageNo: 0,
      data: [],
    },
  };

  constructor(private service: MenuService) {
    this.service.findMenuTree().subscribe((vo) => {
      this.menuTreeData = vo.data;
      this.loadMenuGridData();
    });
  }

  ngOnInit(): void {}

  onMenuItemClick(event: TreeNode) {
    alert(event.data.title);
  }

  onAddMenu() {
    alert('add menu');
  }

  loadMenuGridData() {
    this.service.findMenuGrid().subscribe((vo) => {
      this.menuGrid.data = vo.data;
    });
  }

  onMenuGridPageNoChange(pageNo: number) {
    alert(pageNo);
  }

  onMenuGridPageSizeChange(pageSize: number) {
    alert(pageSize);
  }
}
