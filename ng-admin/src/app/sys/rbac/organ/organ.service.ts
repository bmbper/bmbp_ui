import { Injectable } from '@angular/core';
import { HttpService } from '@app/http.service';
import { Observable } from 'rxjs';
import { RespVo } from '@app/sys/resp';

export interface OrganVo {
  rId?: string;
  organId?: string;
  organTitle?: string;
}

@Injectable()
export class OrganService {
  constructor(private http: HttpService) {}

  say(): Observable<RespVo<OrganVo>> {
    return this.http.post<RespVo<OrganVo>>(
      '/rbac/v1/organ/info/id/F927509C445A48A88E5E52B41C2EA294',
      {}
    );
  }
}
