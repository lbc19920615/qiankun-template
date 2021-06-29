<template>
  <remote-options
      v-model="val"
      label-key="dictValue"
      value-key="dictId"
      :request-method="remoteMethod"
      @select="onSelect"
  ></remote-options>
</template>

<script>
import RemoteOptions from "@/components/FreeForm/RemoteOptions";
import {remoteOptions} from "@/utils/remote";
import API from "@/api";
import {ref} from "@vue/composition-api";
export default {
  name: "DictDropOptions",
  components: {RemoteOptions},
  props: {
    dictId: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    let remoteMethod = async function() {
      return await remoteOptions(
        API.ZyDict.getDictList({
          parentId: props.dictId
        })
      )
    }

    function onSelect(v) {
      ctx.emit('select', v)
    }

    let val = ref(undefined)
    return {
      val,
      remoteMethod,
      onSelect
    }
  }
}
</script>

<style scoped>

</style>
