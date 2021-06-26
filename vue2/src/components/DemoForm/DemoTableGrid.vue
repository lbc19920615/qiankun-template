<template>
<div class="demo-table-grid">
  <cus-grid-wrap @query_change="tableHttp.buildQuery"  prefix="search1">
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



function useTableHttp(tableObj) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  tableObj.setReq((query) => {
    return []
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
