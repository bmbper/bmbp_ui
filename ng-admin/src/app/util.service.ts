import { SelectItem, SelectOptions } from './vo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  dictLabel(value: any, options: SelectOptions): any {
    for (let i = 0; i < options.length; i++) {
      let item: SelectItem = options[i];
      if (item.value == value) {
        return item.label;
      }
    }
    return value;
  }

  dictValue($event: any): any {
    return $event.value;
  }
}
