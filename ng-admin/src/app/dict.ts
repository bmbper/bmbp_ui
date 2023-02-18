export interface DictItem {
  label: string;
  value: string | number;
}

export const AppTypeDict: DictItem[] = [
  {
    label: '集成应用',
    value: 'interjection',
  },
  {
    label: '配置应用',
    value: 'meta',
  },
  {
    label: '原生应用',
    value: 'CODE',
  },
];

export const AppMenuTypeDict: DictItem[] = [
  {
    label: '模块',
    value: 'MODULE',
  },
  {
    label: '功能',
    value: 'FUNC',
  },
];

export const AppMenuRouteDict: DictItem[] = [
  {
    value: 'META',
    label: '配置',
  },
  {
    value: 'ROUTE',
    label: '路由',
  },
  {
    value: 'URL',
    label: 'URL',
  },
  {
    value: 'OUT',
    label: '外部',
  },
];
