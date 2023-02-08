import { Injectable } from '@angular/core';
import { HttpService } from '@app/http.service';
import { Observable } from 'rxjs';
import { RespVo } from '@app/vo';

export interface NavMenuVo {
  title?: String;
  route?: String;
  children?: NavMenuVo[];
}

@Injectable()
export class PortalService {
  VoURL = {
    rbacMenu: '/home/nav/app/menu',
  };

  constructor(private http: HttpService) {}

  getRbacMenu(): Observable<RespVo<NavMenuVo[]>> {
    return this.http.post<RespVo<NavMenuVo[]>>(this.VoURL.rbacMenu, {});
  }
}
