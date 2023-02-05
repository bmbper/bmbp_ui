import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmbp-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() width: string | number | undefined = '160px';
}
