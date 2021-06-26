import { reactive } from '@vue/composition-api'
import isFunction from 'lodash/isFunction'
import to from "await-to-js";
import {QueryObject, TablePagenationObject} from "@/types/common";

type ReqType = ((query: QueryObject) => Promise<any>) | undefined;

class TablePaginate {
  data = reactive({
    list: [],
    total: 0,
    size: 10,
    page: 1,
    loading: false,
    query: {},
  });

  req: ReqType;

  buildQuery(val) {
    console.log('buildQuery', val, this)
    this.data.query = val;
  }

  async reload() {
    return this.paginate(1);
  }

  async paginate(page = 1) {
    const data = this.data
    data.page = page
    data.loading = true;
    if (this.req && isFunction(this.req)) {
      const [err, obj] = await to(
        this.req(data.query)
      );
      if (err) {
        return Promise.reject(err)
      }
      if (obj) {
        const d = obj as TablePagenationObject
        data.list = d.data;
        data.total = d.total;
        data.loading = false;
      }
    }
  }
}

export function useTable() {
  return new TablePaginate()
}


class HttpTablePagniate extends TablePaginate {
  constructor(req) {
    super();
    this.req = req
  }
}

export function useHttpTable(req: ReqType) {
  return new HttpTablePagniate(req)
}
