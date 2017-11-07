<template lang="pug">
div
  span(v-if="data <= 10 && data !== 0") Wow.. tinggal {{ data }} lagi loh
  span(v-if="data == 0") Yah, stok lagi kosong. 
</template>

<script>
export default {
  props: ['data']
}
</script>