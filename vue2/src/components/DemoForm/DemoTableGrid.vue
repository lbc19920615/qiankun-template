<template>
<div class="demo-table-grid">
  <cus-grid-wrap @query_change="buildQuery"  prefix="search1">
    <el-row type="flex">
      <cus-grid-search prefix="search1" :rules="rules"
                       @search="tableHttp.paginate(1)">
      </cus-grid-search>
    </el-row>
    <free-table :data="tableHttp.data.list"
                :column="columns"
                :total="tableHttp.data.total"
                :pagination="true"></free-table>
  </cus-grid-wrap>
</div>
</template>

<script>
import CusGridWrap from "@/components/CusForm/CusGridWrap";
import CusGridSearch from "@/components/CusForm/CusGridSearch";
import {useHttpTable} from "@/components/DemoForm/Demo1";
import {cusFormRule} from "@/components/DemoForm/DemoGrid1";
import {columns} from '@/components/DemoForm/Columns'
import API from '@/api'
import { onMounted } from '@vue/composition-api'

export default {
  name: "DemoTableGrid",
  components: {CusGridSearch, CusGridWrap,
  },
  data() {
    let rules = cusFormRule
    return {
      rules,
      columns
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx) {
    let tableHttp = useHttpTable(
      (query) => {
        return API.Demo1.list(query)
      }
    );

    function buildQuery(val) {
      tableHttp.buildQuery(val)
    }

    onMounted(() => {
      tableHttp.reload()
    })

    return {
      buildQuery,
      tableHttp,
    }
  }
}
</script>

<style scoped>

</style>
