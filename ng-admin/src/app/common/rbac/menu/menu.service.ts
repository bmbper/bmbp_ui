import { Injectable, OnInit } from '@angular/core';
import { BaseVo, Page, RespVo } from 'src/app/vo';
import { HttpService } from 'src/app/http.service';
import { Observable } from 'rxjs';
import { UtilService } from 'src/app/util.service';

export enum BmbpMenuType {
  Route = 'route',
  URL = 'url',
  META = 'meta',
}

export interface BmbpMenuVo extends BaseVo {
  menuId?: string;
  parentMenuId?: string;
  menuTitle?: string;
  menuPath?: string;
  menuRoute?: string;
  menuRouteType?: BmbpMenuType;
  children?: BmbpMenuVo[];
  appId?: string;
}

export interface BmbpMenuQueryFrom {
  parentMenuId?: string;
  parentMenuPath?: string;
  menuTitle?: string;
  menuRouteType?: string;
}

@Injectable()
export class MenuService implements OnInit {
  VoURL = {
    menuTree: 'common/v1/menu/tree',
    menuPage: 'common/v1/menu/page',
  };

  ngOnInit(): void {}

  constructor(private http: HttpService) {}

  findMenuTree(): Observable<RespVo<BmbpMenuVo[]>> {
    return this.http.post<RespVo<BmbpMenuVo[]>>(this.VoURL.menuTree, {
      appId: '0',
    });
  }

  findMenuGrid(params: BmbpMenuQueryFrom) {
    return this.http.post<RespVo<Page<BmbpMenuVo>>>(
      this.VoURL.menuPage,
      params
    );
  }
}
