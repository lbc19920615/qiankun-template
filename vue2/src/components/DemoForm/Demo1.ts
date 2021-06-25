import { reactive } from '@vue/composition-api'

export function useTable() {
  const ret = {};
  const data = reactive({
    list: [],
    total: 0,
    size: 10,
    page: 1,
    loading: false,
    query: {},
  });
  let req = null;

  const methods = {
    setData(arr) {
      data.list = arr;
    },
    reload() {
      data.query = {};
      methods.paginate(1);
    },
    async paginate(page = 1) {
      data.page = page;
      data.loading = true;
      try {
        const obj = await req(data.query);
        methods.setData(obj.data);
        data.total = page * data.size;
        data.loading = false;
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
