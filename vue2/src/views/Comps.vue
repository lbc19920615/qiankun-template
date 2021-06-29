<template>
  <div class="comps">
    <RemoteOptions :request-method="remoteMethod"></RemoteOptions>
  </div>
</template>
<script>
import RemoteOptions from "@/components/FreeForm/RemoteOptions";
import API from '@/api'
import {remoteOptions} from "@/utils/remote";

export default {
  components: {
    RemoteOptions
  },
  setup() {
    let remoteMethod = async function() {
      return await remoteOptions(API.Demo1.list())
    }
    return {
      remoteMethod
    }
  }
}
</script>
