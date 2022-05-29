export interface HeaderConfig {
  imgUrl: string;
  tags: string[];
  imgTop: boolean;
  showDesc: boolean
}

export interface PagerConfig {
  total: number;
  pageSize: number;
  current: number;
}
