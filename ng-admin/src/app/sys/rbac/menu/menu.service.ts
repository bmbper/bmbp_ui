import { Injectable } from '@angular/core';
import { BaseVo, Page, RespVo } from '@app/vo';
import { HttpService } from '@app/http.service';
import { Observable } from 'rxjs';

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

@Injectable()
export class MenuService {
  VoURL = {
    menuTree: 'rbac/v1/menu/tree',
    menuPage: 'rbac/v1/menu/page',
  };

  constructor(private http: HttpService) {}

  findMenuTree(): Observable<RespVo<BmbpMenuVo[]>> {
    return this.http.post<RespVo<BmbpMenuVo[]>>(this.VoURL.menuTree, {
      appId: '0',
    });
  }

  findMenuGrid() {
    return this.http.post<RespVo<Page<BmbpMenuVo>>>(this.VoURL.menuPage, {
      appId: '0',
    });
  }
}
