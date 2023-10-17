// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataProvider<T = any >{
  getList(): Promise<T[]>;
  getOne(): Promise<T>;
}
