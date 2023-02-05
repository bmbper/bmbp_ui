import { Component, Input, OnInit } from '@angular/core';
import { BmbpLayoutEnum } from '@app/components/layout/components';

@Component({
  selector: 'app-bmbp-layout',
  templateUrl: './bmbp-layout.component.html',
  styleUrls: ['./bmbp-layout.component.scss'],
})
export class BmbpLayoutComponent implements OnInit {
  @Input() layout: { height?: string | number; layout?: BmbpLayoutEnum } = {};
  layoutStyle: {
    height?: string;
    display?: string;
    'flex-direction'?: string;
  } = {};

  ngOnInit(): void {
    if (this.layout.height) {
      if (typeof this.layout.height == 'string') {
        this.layoutStyle.height = this.layout.height;
      } else {
        this.layoutStyle.height = this.layout.height + 'px';
      }
    }
    debugger;
    if (this.layout.layout != undefined) {
      if (this.layout.layout == BmbpLayoutEnum.Col) {
        this.layoutStyle.display = 'flex';
        this.layoutStyle['flex-direction'] = 'column';
      } else {
        this.layoutStyle.display = 'flex';
        this.layoutStyle['flex-direction'] = 'row';
      }
    }
  }
}
