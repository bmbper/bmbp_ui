import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmbp-layout-left',
  templateUrl: './bmbp-layout-left.component.html',
  styleUrls: ['./bmbp-layout-left.component.scss'],
})
export class BmbpLayoutLeftComponent implements OnInit {
  @Input() width: string | number | undefined = '160px';
  comStyle: { width?: string | number } = {};

  ngOnInit(): void {
    this.comStyle.width = this.width;
  }
}
