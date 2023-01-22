import { OnInit } from '@angular/core';

export declare interface BaseVo {
  rId?: string;
  rLevel?: string;
  rFlag?: string;
  rSign?: string;
  rCreateUser?: string;
  rCreateTime?: string;
  rUpdateUser?: string;
  rUpdateTime?: string;
  rOwnerOrg?: string;
  rOwnerUser?: string;
}

export declare interface RespVo<T> {
  code: number;
  msg: string;
  data: T;
}

export declare interface Page<T> {
  pageNo: number;
  pageSize: number;
  total: number;
  data: T[];
}

export declare interface BmbpTreeConfig {
  nodeTitle: string;
  nodeKey: string;
  nodeChildren: string;
}

export declare interface BmbpGrid<T> {
  config: {
    borderType?: string;
  };
  data: {
    total: number;
    pageNo: number;
    pageSize: number;
    data: T[];
  };
  columns: BmbpGridColumn[];
}

export enum BmbpGridFieldType {
  Text = 'text',
}

export declare interface BmbpGridColumn {
  field: string;
  header: string;
  fieldType: BmbpGridFieldType | string;
  width?: string | number;
}

export declare interface BmbpGridPage {
  total: number;
  pageNo: number;
  pageSize: number;
}

export declare interface CrudService extends OnInit {}
