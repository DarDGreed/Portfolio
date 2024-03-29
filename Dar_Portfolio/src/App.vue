<script setup>
import MainView from './components/MainView.vue'
import Navigation from './components/Navigation.vue';
</script>

<template>
  <!-- <div class="res_nav_container">
    <span class="material-symbols-outlined menu">
    menu
    </span>
  </div> -->
  <div class="navigation">
    <Navigation />

  </div>
  <div class="content">
    <MainView />
  </div>
</template>

<style scoped>
/* .menu {
    float: inline-end;
    margin-right: 20px;
}
@media only screen and (600px < width) {
.menu {
  display: none;
}
} */
</style>