<template>
  <div class="home">
    <h2>home -- {{ cityStore.cities }}</h2>
    <button @click="addCity">添加城市苏州~</button>
  </div>
</template>

<script setup>
import useCityStore from "@/store/modules/city";

const cityStore = useCityStore();

function addCity() {
  cityStore.addOneCityAction("苏州");
}
</script>

<style lang="less" scoped></style>
