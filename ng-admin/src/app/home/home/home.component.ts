import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionItemClickEvent, ToastService } from 'ng-devui';
import { HomeService, NavMenuVo } from '@app/home/home/home.service';

@Component({
  selector: 'bmbp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class BmbpHomeComponent implements OnInit {
  rbacMenu: NavMenuVo[] = [];
  breadCrumb: string[] = [];

  constructor(
    private router: Router,
    private toastService: ToastService,
    private home: HomeService
  ) {
    home.getRbacMenu().subscribe((vo) => {
      this.rbacMenu = vo.data;
    });
  }

  ngOnInit(): void {
    this.router.navigateByUrl('home/sys/rbac/menu').then((r) => {});
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
    this.breadCrumb = bread.reverse();
  }
}
