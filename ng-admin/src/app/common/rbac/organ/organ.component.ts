import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  DialogService,
  Dictionary,
  FormLayout,
  ToastService,
  TreeComponent,
  TreeNode,
} from 'ng-devui';
import { OrganService, OrganVo } from 'src/app/common/rbac/organ/organ.service';
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
} from 'src/app/vo';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'common-organ',
  templateUrl: './organ.component.html',
  styleUrls: ['./organ.component.scss'],
})
export class OrganComponent implements OnInit {
  @ViewChild('organTree', { static: true })
  organTree: TreeComponent | undefined;
  organTreeData: BmbpMenuVo[] = [];
  organTreeConfig: BmbpTreeConfig = {
    nodeTitle: 'menuTitle',
    nodeKey: 'menuId',
    nodeChildren: 'children',
  };
  selectOrganTreeNode: BmbpMenuVo = {};
  selectOrganRowNode: BmbpMenuVo = {};

  selectOptions = {
    organType: [
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
  organGridQueryForm: BmbpGridQueryFrom<BmbpMenuQueryFrom> = {
    data: {
      menuTitle: '',
      parentMenuPath: '',
    },
    fieldLayout: FormLayout.Horizontal,
  };
  organGrid: BmbpGrid<BmbpMenuVo> = {
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
      this.organTreeData = vo.data;
    });
  }

  ngOnInit(): void {
    console.log('1');
  }

  ngAfterViewInit() {}

  onOrganItemClick(event: TreeNode) {
    this.organGridQueryForm.data.parentMenuId = event.data.originItem.menuId;
    this.organGridQueryForm.data.parentMenuPath =
      event.data.originItem.menuPath;
    this.selectOrganTreeNode = event.data.originItem;
    this.loadGridData();
  }

  onOrganMenu() {
    const addMenuFormModal = this.dialog.open({
      id: 'common-menu-add-form',
      width: '700px',
      maxHeight: '500px',
      title: '新增-菜单资源',
      content: '',
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

  loadGridData() {
    let params = this.organGridQueryForm.data;
    this.service.findMenuGrid(params).subscribe((vo) => {
      this.organGrid.data = vo.data;
    });
  }

  onOrganGridPageNoChange(pageNo: number) {
    alert(pageNo);
  }

  onOrganGridPageSizeChange(pageSize: number) {
    alert(pageSize);
  }

  onQueryFormDataClear() {
    this.organGridQueryForm.data = {};
    this.onQueryGrid();
  }

  onQueryGrid() {
    this.loadGridData();
  }

  onAddSubOrgan($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onChangeParent($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onEditRow($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onViewRow($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  onDeleteRow($event: MouseEvent, rowItem: any): void {
    this.toast.open({
      value: [{ severity: 'info', summary: '提醒', content: '功能开发中' }],
    });
  }

  afterLeftTreeInit($event: Dictionary<TreeNode>) {
    if (this.organTree && this.organTreeData.length > 0) {
      let firstTreeNodeData: BmbpMenuVo = this.organTreeData[0];
      let treeNode = this.organTree.treeFactory.getCompleteNodeById(
        firstTreeNodeData.menuId || ''
      );
      if (treeNode) {
        this.onOrganItemClick(treeNode);
        this.organTree.treeFactory.activeNodeById('1');
      }
    }
  }
}
