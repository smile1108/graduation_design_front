<template>
  <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'

  export default {
    name: 'App',
    components: {
      MyHeader
    }
  }
</script>

<style>
</style>
