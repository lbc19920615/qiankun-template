import { onMounted, onBeforeUnmount } from '@vue/composition-api'
import { emitter } from "@/plugins/mitt";

export function useTableGridSearchEvent(prefix = '', ctx) {
  function onSearchQueryChange(searchQuery) {
    // console.log('onSearchQueryChange', searchQuery)
    ctx.emit('query_change', searchQuery)
  }

  onMounted(() => {
    emitter.on(`${prefix}:search-change`, onSearchQueryChange)
  })

  onBeforeUnmount(() => {
    emitter.off(`${prefix}:search-change`, onSearchQueryChange)
  })

  return [
    onSearchQueryChange
  ]
}
