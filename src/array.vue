<script setup>
let leval = -1;  
let topic=["Html","CSS","javascript","vue.js"];
let topic2=["PHP","MySQL","C#",];
let topic3=["Physon","MongoDB","PowerBI",];
let topic4={資料庫:"MySQL",前端語言:"Jacascript"+"、"+"Vue.js",後端語言:"PHP"+"C#"}
</script>

<template>
<div v-if="leval ===0">前端技術
<li v-for="name in topic">{{name}}</li>
</div>
  <div v-else-if="leval > 0">後端技術
    <li v-for="(name,index) in topic2">{{ index+1 }}-{{name}}</li>
</div> 
<div v-else>資料庫工程師
    <li v-for="(value,key) in topic4">{{key}}:{{value}}</li>
</div>
</template>
<style scoped>
</style>