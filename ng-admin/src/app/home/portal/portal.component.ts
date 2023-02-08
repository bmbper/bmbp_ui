import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AccordionItemClickEvent, SourceConfig, ToastService } from 'ng-devui';
import { PortalService, NavMenuVo } from '@app/home/portal/portal.service';
import { BmbpLayoutEnum } from '@app/components/layout/components';
import { BmbpBreadcrumbConfig } from '@app/bmbp.types';

@Component({
  selector: 'bmbp-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class BmbpPortalComponent implements OnInit {
  rbacMenu: NavMenuVo[] = [];
  breadCrumbData: BmbpBreadcrumbConfig[] = [];

  portalConfig: {
    leftWidth?: string | number;
    centerLayout: {
      height?: string | number;
      layout?: BmbpLayoutEnum;
    };
  } = {
    leftWidth: '160px',
    centerLayout: {
      height: 'calc(100% - 60px)',
      layout: BmbpLayoutEnum.Row,
    },
  };

  rootBreadData: BmbpBreadcrumbConfig = {
    title: '工作台',
    route: '/portal/workbench',
  };

  constructor(
    private router: Router,
    private toastService: ToastService,
    private home: PortalService
  ) {
    home.getRbacMenu().subscribe((vo) => {
      this.rbacMenu = vo.data;
    });
  }

  ngOnInit(): void {
    this.breadCrumbData = [this.rootBreadData];
    this.router.navigateByUrl('portal/workbench').then((r) => {});
  }

  menuItemClick(event: AccordionItemClickEvent) {
    let route = event.item.route;
    if (route) {
      this.router.navigateByUrl(route).then((r) => {
        if (r) {
          this.changeNavBreadCrumb(event);
        }
      });
    } else {
      this.toastService.open({
        value: [{ severity: 'warn', summary: '警告', content: '请配置路由' }],
      });
    }
  }

  private changeNavBreadCrumb(event: AccordionItemClickEvent): void {
    let bread: SourceConfig[] = [];
    bread.push({
      title: event.item.title,
    });
    let parent = event.parent;
    while (parent) {
      bread.push({
        title: parent.title,
      });
      parent = parent.parent;
    }
    this.breadCrumbData = [this.rootBreadData].concat(bread.reverse());
  }

  breadCrumbItemClick(breadItem: BmbpBreadcrumbConfig): void {
    const curBreadCrumbData = [];
    for (let item of this.breadCrumbData) {
      curBreadCrumbData.push(item);
      if (item.route == breadItem.route && item.title == breadItem.title) break;
    }
    this.breadCrumbData = curBreadCrumbData;
    if (breadItem.route) {
      this.router.navigateByUrl(breadItem.route).then((r) => {});
    }
  }
}
