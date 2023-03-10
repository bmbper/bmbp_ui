import { Injectable, OnInit } from '@angular/core';
import { BaseVo, Page, RespVo } from 'src/app/vo';
import { HttpService } from 'src/app/http.service';
import { Observable } from 'rxjs';

export interface BmbpMenuVo extends BaseVo {
  menuId?: string;
  parentMenuId?: string;
  parentMenuPath?: string;
  menuTitle?: string;
  menuType?: string;
  menuPath?: string;
  menuRoute?: string;
  menuRouteType?: string;
  children?: BmbpMenuVo[];
  appId?: string;
}

export interface BmbpMenuQueryFrom {
  parentMenuId?: string;
  menuPath?: string;

  menuTitle?: string;
  menuRouteType?: string;
  pageNo?: number;
  pageSize?: number;
}

@Injectable()
export class MenuService implements OnInit {
  VoURL = {
    menuTree: 'rbac/v1/menu/tree',
    menuPage: 'rbac/v1/menu/page',
    saveMenu: 'rbac/v1/menu/save',
    findOne: 'rbac/v1/menu/info/id/',
  };

  ngOnInit(): void {}

  constructor(private http: HttpService) {}

  findMenuTree(): Observable<RespVo<BmbpMenuVo[]>> {
    return this.http.post<RespVo<BmbpMenuVo[]>>(this.VoURL.menuTree);
  }

  findMenuGrid(params: BmbpMenuQueryFrom) {
    return this.http.post<RespVo<Page<BmbpMenuVo>>>(
      this.VoURL.menuPage,
      params
    );
  }

  save(menuData: BmbpMenuVo): Observable<RespVo<BmbpMenuVo>> {
    return this.http.post<RespVo<BmbpMenuVo>>(this.VoURL.saveMenu, menuData);
  }

  findMenuInfo(rId: string): Observable<RespVo<BmbpMenuVo>> {
    return this.http.get<RespVo<BmbpMenuVo>>(this.VoURL.findOne + rId);
  }
}
