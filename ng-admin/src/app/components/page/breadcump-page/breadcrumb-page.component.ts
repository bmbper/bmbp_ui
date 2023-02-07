import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bmbp-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
  styleUrls: ['./breadcrumb-page.component.scss'],
})
export class BreadcrumbPageComponent implements OnInit {
  @Input() breadcrumbData: string[] = [];

  ngOnInit(): void {}
}
