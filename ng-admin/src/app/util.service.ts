import { Injectable } from '@angular/core';
import { DictItem } from '@app/dict';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

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
