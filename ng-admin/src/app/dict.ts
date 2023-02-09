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
    value: 'code',
  },
];

export const AppMenuDict: DictItem[] = [
  {
    label: '模块',
    value: 'module',
  },
  {
    label: '功能',
    value: 'func',
  },
];

export const AppMenuRouteDict: DictItem[] = [
  {
    value: 'meta',
    label: '配置',
  },
  {
    value: 'route',
    label: '路由',
  },
  {
    value: 'url',
    label: 'URL',
  },
  {
    value: 'out',
    label: '外部',
  },
];
