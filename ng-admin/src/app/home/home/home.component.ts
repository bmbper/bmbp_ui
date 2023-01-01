import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "ng-devui";
@Component({
    selector: 'bmbp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class BmbpHomeComponent implements OnInit{


  constructor(private router:Router,private toastService: ToastService){

  }

  ngOnInit(): void {
  }

  brac_menu : String[] = []

  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  menu = [
    {
      title: '系统管理',
      open: true,
      children: [{ title: '组织管理',route:'home/sys/rbac/organ' }, { title: '用户管理' ,route:'home/sys/rbac/user'}, { title: '菜单管理',route:'home/sys/rbac/menu' },{ title: '角色管理',route:'home/sys/rbac/role' },{ title: '接口管理',route:'home/sys/rbac/api'},{ title: '数据管理',route:'home/sys/rbac/data'}],
    },
    {
      title: '系统设置',
      children: [{ title: '行政区划' }, { title: '数据字典' }, { title: '运行参数'},{title: '安全配置'}],
    },
    {
      title: '平台审计',
      children: [{ title: '日志审计' }, { title: '资源统计', }, { title: '缓存查询' }],
    }
  ];

  menuClick(event:any){

    this.brac_menu = [];
    if(event.parent){
      this.brac_menu.push(event.parent.title);
    }
    this.brac_menu.push(event.item.title);


    if(event.item.route){
      this.router.navigateByUrl(event.item.route);
      return;
    }
    
    const results = this.toastService.open({
      value: [{ severity: 'info', summary: '提醒', content: '开发中...' }],
    });

  }
}
