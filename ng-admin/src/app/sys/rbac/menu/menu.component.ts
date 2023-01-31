import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import {
  BmbpMenuQueryFrom,
  BmbpMenuVo,
  MenuService,
} from '@app/sys/rbac/menu/menu.service';
import {
  BmbpGrid,
  BmbpGridFieldType,
  BmbpGridQueryFrom,
  BmbpTreeConfig,
  CrudService,
} from '@app/vo';
import {
  DialogService,
  Dictionary,
  FormLayout,
  ToastService,
  TreeComponent,
  TreeNode,
} from 'ng-devui';
import { UtilService } from '@app/util.service';
import { MenuformComponent } from '@app/sys/rbac/menu/menuform/menuform.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements CrudService {
  @ViewChild('menuTree', { static: true })
  menuTree: TreeComponent | undefined;
  menuTreeData: BmbpMenuVo[] = [];
  menuTreeConfig: BmbpTreeConfig = {
    nodeTitle: 'menuTitle',
    nodeKey: 'menuId',
    nodeChildren: 'children',
  };
  selectMenuTreeNode: BmbpMenuVo = {};
  selectMenuRowNode: BmbpMenuVo = {};

  @ViewChild('addMenuDialog', { static: true }) addMenuDialog:
    | TemplateRef<any>
    | undefined;

  selectOptions = {
    menuRouteType: [
      {
        label: 'URL',
        value: 'URL',
      },
      {
        label: '路由',
        value: 'ROUTE',
      },
      {
        label: '配置',
        value: 'META',
      },
    ],
  };
  menuGridQueryForm: BmbpGridQueryFrom<BmbpMenuQueryFrom> = {
    data: {
      menuTitle: '',
      parentMenuPath: '',
    },
    fieldLayout: FormLayout.Horizontal,
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

  constructor(
    private service: MenuService,
    private toast: ToastService,
    public util: UtilService,
    private dialog: DialogService
  ) {
    this.service.findMenuTree().subscribe((vo) => {
      this.menuTreeData = vo.data;
    });
  }

  ngOnInit(): void {
    console.log('1');
  }

  ngAfterViewInit() {}

  onMenuItemClick(event: TreeNode) {
    this.menuGridQueryForm.data.parentMenuId = event.data.originItem.menuId;
    this.menuGridQueryForm.data.parentMenuPath = event.data.originItem.menuPath;
    this.selectMenuTreeNode = event.data.originItem;
    this.loadMenuGridData();
  }

  onAddMenu() {
    const addMenuFormModal = this.dialog.open({
      id: 'rbac-menu-add-form',
      width: '1200px',
      maxHeight: '800px',
      title: '新增-菜单资源',
      contentTemplate: this.addMenuDialog,
      backdropCloseable: true,
      buttons: [
        {
          cssClass: 'primary',
          text: '提交',
          handler: ($event: Event) => {},
        },
        {
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            addMenuFormModal.modalInstance.hide();
          },
        },
      ],
    });
  }

  loadMenuGridData() {
    let params = this.menuGridQueryForm.data;
    this.service.findMenuGrid(params).subscribe((vo) => {
      this.menuGrid.data = vo.data;
    });
  }

  onMenuGridPageNoChange(pageNo: number) {
    alert(pageNo);
  }

  onMenuGridPageSizeChange(pageSize: number) {
    alert(pageSize);
  }

  onQueryFormDataClear() {
    this.menuGridQueryForm.data = {};
    this.onQueryMenuGrid();
  }

  onQueryMenuGrid() {
    this.loadMenuGridData();
  }

  onAddSubMenu($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onChangeParent($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onEditMenu($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onViewMenu($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onDeleteMenu($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  afterMenuTreeInit($event: Dictionary<TreeNode>) {
    if (this.menuTree && this.menuTreeData.length > 0) {
      let firstTreeNodeData: BmbpMenuVo = this.menuTreeData[0];
      let treeNode = this.menuTree.treeFactory.getCompleteNodeById(
        firstTreeNodeData.menuId || ''
      );
      if (treeNode) {
        this.onMenuItemClick(treeNode);
        this.menuTree.treeFactory.activeNodeById('1');
      }
    }
  }
}
