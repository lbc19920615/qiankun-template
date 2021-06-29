<template>
  <remote-options :request-method="remoteMethod"></remote-options>
</template>

<script>
import RemoteOptions from "@/components/FreeForm/RemoteOptions";
import {remoteOptions} from "@/utils/remote";
import API from "@/api";
export default {
  name: "DictDropOptions",
  components: {RemoteOptions},
  props: {
    dictId: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let remoteMethod = async function() {
      return await remoteOptions(
        API.ZyDict.getDictList({
          parentId: props.dictId
        })
      )
    }
    return {
      remoteMethod
    }
  }
}
</script>

<style scoped>

</style>
