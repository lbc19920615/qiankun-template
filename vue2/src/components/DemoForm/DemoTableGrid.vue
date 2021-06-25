<template>
<div class="demo-table-grid">
  <cus-grid-wrap @query_change="tableHttp.buildQuery" prefix="search1">
    <el-row type="flex">
      <cus-grid-search prefix="search1" :rules="rules">
      </cus-grid-search>
    </el-row>
    <div>
      {{tableHttp.data}}
    </div>
  </cus-grid-wrap>
</div>
</template>

<script>
import CusGridWrap from "@/components/CusForm/CusGridWrap";
import CusGridSearch from "@/components/CusForm/CusGridSearch";
import {useTable} from "@/components/DemoForm/Demo1";
import {cusFormRule} from "@/components/DemoForm/DemoGrid1";

let httpRequest = {
  records: [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄",
    },
  ],
};

function useTableHttp(tableObj) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tableObj.setReq((query) => {
    return Promise.resolve({
      data: httpRequest.records,
    });
  });

  function reload() {
    tableObj.methods.reload();
  }

  function paginate(page) {
    tableObj.methods.paginate(page);
  }

  function buildQuery(val) {
    tableObj.data.query = val;
  }

  return {
    buildQuery,
    reload,
    paginate,
    data: tableObj.data,
  };
}

export default {
  name: "DemoTableGrid",
  components: {CusGridSearch, CusGridWrap,
  },
  data() {
    let rules = cusFormRule
    return {
      rules
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    let tableObj = useTable();
    let tableHttp = useTableHttp(tableObj);

    return {
      tableHttp,
    }
  }
}
</script>

<style scoped>

</style>
