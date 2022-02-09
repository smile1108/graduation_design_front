<template>
  <div>
    <MyHeader :userInfo="userInfo" @deleteUserInfo="deleteUserInfo"></MyHeader>
    <router-view :userInfo="userInfo" :todoList="todoList"></router-view>
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
        userInfo: {},
        todoList: [
          {id: "001", title: "吃饭", done: false},
          {id: "002", title: "游戏", done: false}
        ]
      }
    },
    methods: {
      autoTakeUserInfo() {
        axios.get("http://localhost:9527/user/autoLogin").then(response => {
          if(response.data.code == 200) {
            if(response.data.data === null) {
              this.userInfo = null
            } else {
              this.userInfo = JSON.parse(JSON.stringify(response.data.data.userVo))
              sessionStorage.setItem('userInfo', JSON.stringify(response.data.data.userVo))
              sessionStorage.setItem('expireTimestamp', response.data.data.expireTimestamp)
            }
          }
        })
      },
      // 退出登录时删除用户信息
      deleteUserInfo() {
        // 将userInfo置为空
        this.userInfo = null
        // 删除sessionStorage中的userInfo Item
        sessionStorage.removeItem('userInfo')
      }
    },
    mounted() {
      // 当页面dom渲染好之后 进行自动登录的请求
      this.autoTakeUserInfo()
    }
  }
</script>

<style>
</style>
