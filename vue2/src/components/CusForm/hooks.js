import { onMounted, onBeforeUnmount } from '@vue/composition-api'
import { emitter } from "@/plugins/mitt";

export function useTableGridSearchEvent(prefix = '') {
  function onSearchQueryChange(searchQuery) {
    console.log('onSearchQueryChange', searchQuery)
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
