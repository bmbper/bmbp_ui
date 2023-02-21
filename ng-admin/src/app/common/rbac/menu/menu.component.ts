import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {
  BmbpMenuQueryFrom,
  BmbpMenuVo,
  MenuService,
} from 'src/app/common/rbac/menu/menu.service';
import {
  BmbpGrid,
  BmbpGridFieldType,
  BmbpGridQueryFrom,
  BmbpTreeConfig,
  CrudService,
} from 'src/app/vo';
import {
  DialogService,
  Dictionary,
  FormLayout,
  ToastService,
  TreeComponent,
  TreeNode,
} from 'ng-devui';
import { AppMenuRouteDict, AppMenuTypeDict } from '@app/dict';
import { BmbpService } from '@app/bmbp.service';

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
  menuFormDialogData: BmbpMenuVo = {};

  @ViewChild('menuFormDialog', { static: true }) menuFormDialog:
    | TemplateRef<any>
    | undefined;

  selectOptions = {
    menuRouteType: AppMenuRouteDict,
    menuType: AppMenuTypeDict,
  };
  menuGridQueryForm: BmbpGridQueryFrom<BmbpMenuQueryFrom> = {
    data: {
      menuPath: '',
      parentMenuId: '',
      pageNo: 1,
      pageSize: 10,
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
        field: 'menuType',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '访问类型',
        field: 'menuRouteType',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '访问地址',
        field: 'menuRoute',
        fieldType: BmbpGridFieldType.Text,
      },
      {
        header: '资源层级',
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
    public bmbp: BmbpService,
    private dialog: DialogService
  ) {
    this.findMenuTreeData();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  onMenuItemClick(event: TreeNode) {
    this.menuGridQueryForm.data.menuPath = event.data.originItem.menuPath;
    this.selectMenuTreeNode = event.data.originItem;
    this.findMenuGridData();
  }

  onAddMenu() {
    this.openMenuForm({});
  }

  findMenuTreeData() {
    this.service.findMenuTree().subscribe((vo) => {
      if (vo.code == 0) {
        this.menuTreeData = vo.data;
      } else {
        this.bmbp.error(vo.msg);
      }
    });
    this.menuGridQueryForm.data.menuPath = '/';
    this.findMenuGridData();
  }

  findMenuGridData() {
    let params = this.menuGridQueryForm.data;
    this.service.findMenuGrid(params).subscribe((vo) => {
      if (vo.code == 0) {
        this.menuGrid.data = vo.data;
      } else {
        this.bmbp.error(vo.msg);
      }
    });
  }

  onMenuGridPageNoChange(pageNo: number) {
    this.menuGridQueryForm.data.pageNo = pageNo;
    this.findMenuGridData();
  }

  onMenuGridPageSizeChange(pageSize: number) {
    this.menuGridQueryForm.data.pageSize = pageSize;
    this.findMenuGridData();
  }

  onQueryFormDataClear() {
    this.menuGridQueryForm.data = {};
    this.onQueryMenuGrid();
  }

  onQueryMenuGrid() {
    this.findMenuGridData();
  }

  onAddSubMenu($event: MouseEvent, rowItem: BmbpMenuVo): void {
    let rowItemData = {
      parentMenuId: rowItem.menuId,
      parentMenuPath: rowItem.menuPath,
    };
    this.openMenuForm(rowItemData);
  }

  openMenuForm(rowItem: BmbpMenuVo, title?: string): void {
    this.menuFormDialogData = rowItem;
    this.dialog.open({
      id: 'common-menu-add-form',
      width: '700px',
      maxHeight: '700px',
      title: title || '新增菜单',
      contentTemplate: this.menuFormDialog,
      backdropCloseable: true,
      buttons: [],
    });
  }

  onChangeParent($event: MouseEvent, rowItem: any): void {
    this.bmbp.info('提醒', '功能开发中');
  }

  onEditMenu($event: MouseEvent, rowItem: any): void {
    let rowItemData = {
      rId: rowItem.rId,
    };
    this.openMenuForm(rowItemData, '编辑菜单');
  }

  onViewMenu($event: MouseEvent, rowItem: any): void {
    this.bmbp.info('提醒', '功能开发中');
  }

  onDeleteMenu($event: MouseEvent, rowItem: any): void {
    this.bmbp.info('提醒', '功能开发中');
  }

  afterMenuTreeInit($event: Dictionary<TreeNode>) {
    if (this.menuTree && this.menuTreeData.length > 0) {
      let firstTreeNodeData: BmbpMenuVo = this.menuTreeData[0];
      let treeNode = this.menuTree.treeFactory.getCompleteNodeById(
        firstTreeNodeData.menuId || ''
      );
      if (treeNode) {
        this.onMenuItemClick(treeNode);
        this.menuTree.treeFactory.activeNodeById(treeNode.id);
      }
    }
  }

  afterMenuFormSave(reload: boolean): void {
    if (reload) {
      this.findMenuTreeData();
    }
  }
}
