<script>
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>

<template>
  <RouterView />
</template>
