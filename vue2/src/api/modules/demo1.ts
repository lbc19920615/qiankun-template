import { GET, POST } from '@/utils/req'
import {QueryObject, QueryParams} from "@/types/common";

export default class {
  @GET('/mock/11/api/list')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static list(paramsOrData: QueryObject, config: QueryParams) {}

  @GET('/mock/11/api/detail/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static getById(paramsOrData: QueryObject, config: QueryParams) {}

  @POST('/mock/11/api/list/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static delById(paramsOrData: QueryObject, config: QueryParams) {}

  @POST('/mock/11/api/list/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  static create(paramsOrData: QueryObject, config: QueryParams) {}
}
