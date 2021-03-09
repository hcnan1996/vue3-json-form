<template>
  <div>{{ num }} numberFileld</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
export const num = ref('dddddd')
export default {}
// export default defineComponent({
//   name: 'numberFileld',
//   setup() {
//     return {
//       num,
//     }
//   },
// })
</script>
