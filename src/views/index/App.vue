<template>
  <div>
    <MyHeader :userInfo="userInfo"></MyHeader>
    <router-view :userInfo="userInfo"></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/MyHeader'
  import axios from 'axios'

  export default {
    name: 'App',
    components: {
      MyHeader
    },
    data() {
      return {
        userInfo: {}
      }
    },
    methods: {
      autoTakeUserInfo() {
        console.log("auto")
        axios.get("http://localhost:9527/user/autoLogin").then(response => {
          console.log(response)
          if(response.data.code == 200) {
            if(response.data.data === null) {
              this.userInfo = null
            } else {
              this.userInfo = JSON.parse(JSON.stringify(response.data.data))
              sessionStorage.setItem('userInfo', JSON.stringify(response.data.data))
            }
          }
        })
      }
    },
    mounted() {
      // 当页面dom渲染好之后 进行自动登录的请求
      console.log("mounted")
      this.autoTakeUserInfo()
    }
  }
</script>

<style>
</style>
