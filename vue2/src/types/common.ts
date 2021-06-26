export type QueryObject = {
  [K in any] : any
}

export interface TablePagenationObject extends QueryObject {
  data: [],
  total: number,
}
