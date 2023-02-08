import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SourceConfig } from 'ng-devui';
import { BmbpBreadcrumbConfig } from '@app/bmbp.types';
import { Router } from '@angular/router';

@Component({
  selector: 'bmbp-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
  styleUrls: ['./breadcrumb-page.component.scss'],
})
export class BreadcrumbPageComponent implements OnInit {
  @Input() breadcrumbData: BmbpBreadcrumbConfig[] = [];

  @Output() breadcrumbItemClick = new EventEmitter<BmbpBreadcrumbConfig>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBreadcrumbClick($event: any, breadItem: BmbpBreadcrumbConfig) {
    this.breadcrumbItemClick.emit(breadItem);
  }
}
