<template>
  <div id="app">
    <div class="header">
      <app-header></app-header>
    </div>
    <!--<div class="container">-->
      <!--<div class="sidebar">-->
        <!--<app-sidebar></app-sidebar>-->
      <!--</div>-->
      <!--<div class="content">-->
        <!--<div class="toolbar">-->
          <!--<app-toolbar></app-toolbar>-->
        <!--</div>-->
        <!--<div class="view">-->
          <!--<router-view></router-view>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import appHeader from '@/components/app-header.vue'

  export default {
    name: 'app',
    components: {
      appHeader
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
