import { Pipe, PipeTransform } from '@angular/core';
import { DictItem } from '@app/dict';

@Pipe({ name: 'dictValuePipe' })
export class DictValuePipe implements PipeTransform {
  transform(data: any, selectOptions: DictItem[]): any {
    for (let i = 0; i < selectOptions.length; i++) {
      let item: DictItem = selectOptions[i];
      if (item.value === data) {
        return item.label;
      }
    }
    return data;
  }
}

@Pipe({ name: 'propFromMap' })
export class PropFromMapPipe implements PipeTransform {
  transform(data: any, propsKey: string): any {
    if (!data) return data;
    if (Array.isArray(data)) {
      return data.map((item) => item[propsKey]);
    } else {
      return data[propsKey];
    }
  }
}
