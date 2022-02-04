<template>
  <div>
    <MyHeader :userInfo="userInfo"></MyHeader>
    <router-view :userInfo="userInfo"></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'

  export default {
    name: 'App',
    components: {
      MyHeader
    },
    data() {
      return {
        userInfo: {

        }
      }
    },
    created() {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    }
  }
</script>

<style>
</style>
