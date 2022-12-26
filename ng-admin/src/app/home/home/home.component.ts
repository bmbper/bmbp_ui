import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'bmbp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class BmbpHomeComponent implements OnInit{


  constructor(private router:Router){

  }

  ngOnInit(): void {
  }


  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  menu = [
    {
      title: '系统管理',
      open: true,
      children: [{ title: '组织管理' }, { title: '用户管理' }, { title: '菜单管理' },{ title: '角色管理' },{ title: '接口管理'},{ title: '数据管理'}],
    },
    {
      title: '系统设置',
      children: [{ title: '行政区划' }, { title: '数据字典' }, { title: '运行参数'},{title: '安全配置'}],
    },
    {
      title: '平台审计',
      children: [{ title: '日志审计' }, { title: '资源统计', }, { title: '缓存查询' }],
    },
  ];

  menuClick(event:any){
    debugger;
  }
}
