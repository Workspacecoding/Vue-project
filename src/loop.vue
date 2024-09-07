<script setup>
let number = 15;
</script>

<template>
  <div v-if="number > 15">數字大於15</div>
  <div v-else-if="number < 15">數字小於15</div>
  <div v-else>數字等於15。。</div>
</template>
<style scoped>

</style>