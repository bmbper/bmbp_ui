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
        console.log('路由跳转失败');
      });
    } else {
      this.toastService.open({
        value: [{ severity: 'warn', summary: '警告', content: '请配置路由' }],
      });
    }
  }
}
