export interface AppVo {
  rId: string;
  appCode: string;
  appTitle: string;
  appType?: string;
  appUrl?: string;

  isActive?: boolean;
}

export interface AppMenuVo {
  rId: string;
  appId: string;
  menuCode: string;
  menuTitle: string;
  menuType?: string;
  menuRouteType?: string;
  meuRoute?: string;
  icon?: string;
}

export interface AppSideNav {
  app: AppVo;
  menu: AppMenuVo[];
}

export interface BmbpBreadcrumbConfig {
  title: string;
  route?: string;
}
