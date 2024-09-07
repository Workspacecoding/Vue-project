<script setup>
let message="hello world";
let name="content";
let checked=true;
</script>

<template>
    <nav>主選單導覽列</nav>
    <main v-html="message.toUpperCase()"></main>
    <main>{{message}}</main>
    <div v-bind:class="name">操作標籤屬性</div>
    <div :class="checked?'dark':'light'">判斷式</div>
  </template>

<style scoped>
    main {
        background: rgb(249, 191, 233); 
    }
    .content{color:red;
    }
    .dark{
        color:rgb(104, 42, 42);
    }
    .light{
        color:aquamarine;

    }
</style>