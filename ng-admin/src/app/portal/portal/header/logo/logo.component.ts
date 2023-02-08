import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'bmbp-portal-header-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() logoWidth: string | number | undefined = '160px';
  comStyle: {
    width?: string | number;
  } = {};

  ngOnInit(): void {
    this.comStyle.width = this.logoWidth;
  }
}
