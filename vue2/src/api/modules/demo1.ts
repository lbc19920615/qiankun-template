import { GET } from '@/utils/req'
import {QueryObject} from "@/types/common";

interface QueryParams {
  urlParams: QueryObject,
  instanceConf: QueryObject
}

export default class {
  @GET('/mock/11/api/list')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static list(paramsOrData: QueryObject, config: QueryParams) {}

  @GET('/mock/11/api/list/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static getById(paramsOrData: QueryObject, config: QueryParams) {}
}
