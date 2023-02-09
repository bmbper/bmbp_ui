import { Component, Input } from '@angular/core';
import { AppVo } from '@app/bmbp.types';

@Component({
  selector: 'bmbp-portal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() logWidth: string | number | undefined = '160px';
  @Input() appNavData: AppVo[] = [];
}
