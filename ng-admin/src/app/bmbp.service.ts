import { Injectable } from '@angular/core';
import { ToastService } from 'ng-devui';
import { DictItem } from '@app/dict';

@Injectable({
  providedIn: 'root',
})
export class BmbpService {
  constructor(private toastService: ToastService) {}

  info(msg: string, title?: string) {
    if (title == null) {
      title = '信息';
    }
    this.toast('info', title, msg);
  }

  warn(msg: string, title?: string) {
    if (title == null) {
      title = '警告';
    }
    this.toast('warn', title, msg);
  }

  error(msg: string, title?: string) {
    if (title == null) {
      title = '错误';
    }
    this.toast('error', title, msg);
  }

  success(msg: string, title?: string) {
    if (title == null) {
      title = '信息';
    }
    this.toast('success', title, msg);
  }

  toast(toastType: string, title: string, msg: string) {
    this.toastService.open({
      value: [{ severity: toastType, summary: title, content: msg }],
    });
  }

  dictLabel(value: any, options: DictItem[]): any {
    if (value == null) {
      return '--';
    }
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
