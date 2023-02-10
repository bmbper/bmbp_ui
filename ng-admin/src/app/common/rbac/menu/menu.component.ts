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
import { AppMenuRouteDict } from '@app/dict';
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
    public util: BmbpService,
    private dialog: DialogService
  ) {
    this.service.findMenuTree().subscribe((vo) => {
      this.menuTreeData = vo.data;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  onMenuItemClick(event: TreeNode) {
    this.menuGridQueryForm.data.parentMenuId = event.data.originItem.menuId;
    this.menuGridQueryForm.data.parentMenuPath = event.data.originItem.menuPath;
    this.selectMenuTreeNode = event.data.originItem;
    this.loadMenuGridData();
  }

  onAddMenu() {
    this.openMenuForm(this.selectMenuTreeNode);
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

  onAddSubMenu($event: MouseEvent, rowItem: BmbpMenuVo): void {
    this.openMenuForm(rowItem);
  }

  openMenuForm(rowItem: BmbpMenuVo): void {
    this.menuFormDialogData = rowItem;
    this.dialog.open({
      id: 'common-menu-add-form',
      width: '700px',
      maxHeight: '700px',
      title: '新增',
      contentTemplate: this.menuFormDialog,
      backdropCloseable: true,
      buttons: [],
    });
  }

  onChangeParent($event: MouseEvent, rowItem: any): void {
    this.util.info('提醒', '功能开发中');
  }

  onEditMenu($event: MouseEvent, rowItem: any): void {
    this.util.info('提醒', '功能开发中');
  }

  onViewMenu($event: MouseEvent, rowItem: any): void {
    this.util.info('提醒', '功能开发中');
  }

  onDeleteMenu($event: MouseEvent, rowItem: any): void {
    this.util.info('提醒', '功能开发中');
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
}
