import { Component, Input, OnInit } from '@angular/core';
import { AppVo } from '@app/bmbp.types';

@Component({
  selector: 'bmbp-portal-header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() appNavData: AppVo[] = [];

  curNavData: AppVo[] = [];
  moreNavData: AppVo[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.appNavData.length <= 8) {
      this.curNavData = this.appNavData;
    } else {
      this.curNavData = this.appNavData.slice(0, 8);
      this.moreNavData = this.appNavData.slice(8, this.appNavData.length);
    }
  }

  onAppNavItemClick(item: AppVo) {}
}
