import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionItemClickEvent, ToastService } from 'ng-devui';
import { PortalService, NavMenuVo } from '@app/home/portal/portal.service';
import { BmbpLayoutEnum } from '@app/components/layout/components';

@Component({
  selector: 'bmbp-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class BmbpPortalComponent implements OnInit {
  rbacMenu: NavMenuVo[] = [];
  breadCrumb: string[] = [];
  breadCrumbData: any[] = [];

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
    this.router.navigateByUrl('portal/sys/rbac/menu').then((r) => {});
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
    let bread = [];
    bread.push(event.item.title);
    let parent = event.parent;
    while (parent) {
      bread.push(parent.title);
      parent = parent.parent;
    }
    this.breadCrumbData = bread.reverse();
  }
}
