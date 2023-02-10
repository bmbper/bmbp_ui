import { Injectable } from '@angular/core';
import { ToastService } from 'ng-devui';
import { DictItem } from '@app/dict';

@Injectable({
  providedIn: 'root',
})
export class BmbpService {
  constructor(private toastService: ToastService) {}

  warn(title: string, msg: string) {
    this.toast('warn', title, msg);
  }

  info(title: string, msg: string) {
    this.toast('info', title, msg);
  }

  error(title: string, msg: string) {
    this.toast('error', title, msg);
  }

  toast(toastType: string, title: string, msg: string) {
    this.toastService.open({
      value: [{ severity: toastType, summary: title, content: msg }],
    });
  }

  dictLabel(value: any, options: DictItem[]): any {
    let item: DictItem | undefined = options.find(
      (item) => item.value == value
    );
    if (item) return item.label;
    return value;
  }

  dictValue($event: any): any {
    return $event.value;
  }
}
