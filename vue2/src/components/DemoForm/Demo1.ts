import { reactive } from '@vue/composition-api'

type QueryObject = {
  [K in any] : any
}

export function useTable() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ret: {
    methods: { reload(): void; setData(arr): void; paginate(page?: number): Promise<void> };
    data: QueryObject,
    setReq: (v) => void;
  } = {};
  const data = reactive({
    list: [],
    total: 0,
    size: 10,
    page: 1,
    loading: false,
    query: {},
  });
  let req;

  const methods = {
    setData(arr) {
      data.list = arr;
    },
    reload() {
      data.page = 1
      data.query = {};
      methods.paginate(1);
    },
    async paginate(page = 1) {
      data.page = page;
      data.loading = true;
      try {
        if (req) {
          const obj = await req(data.query);
          methods.setData(obj.data);
          data.total = page * data.size;
          data.loading = false;
        }
      } catch (e) {
        console.log(e);
      }
    },
  };

  ret.setReq = function (v) {
    req = v;
  };

  ret.data = data;
  ret.methods = methods;
  return ret;
}
