<template>
  <div class="comps">
    <section>
      <RemoteOptions :request-method="remoteMethod"></RemoteOptions>
    </section>
    <section>
      <DictDropOptions dict-id="0256"></DictDropOptions>
    </section>
  </div>
</template>
<script>
import RemoteOptions from "@/components/FreeForm/RemoteOptions";
import API from '@/api'
import {remoteOptions} from "@/utils/remote";
import DictDropOptions from "@/components/zhongyue/DictDropOptions";

export default {
  components: {
    DictDropOptions,
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
