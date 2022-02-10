<template>
  <div>
    <MyHeader :userInfo="userInfo" @deleteUserInfo="deleteUserInfo"></MyHeader>
    <router-view :userInfo="userInfo" :todoList="todoList" @addBacklog="addBacklog" @deleteBacklog="deleteBacklog"></router-view>
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
      },
      // 获取用户所有待办事项的方法
      getAllBacklog() {
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
        if(userInfo === null) {
          // 如果userInfo为null 表示当前还没有登录 直接return
          return
        }
        // 否则就调用获取待办事项的接口
        // 先拼接对应的url
        const url = "http://localhost:9527/backlog/getAllBacklogs?username=" + userInfo.username
        axios.get(url).then(res => {
          if(res.data.code == 200) {
            // 设置todoList
            this.todoList = JSON.parse(JSON.stringify(res.data.data))
          }
        })
      },
      // 添加待办事项的方法
      addBacklog(title) {
        // 调用后端添加待办事项的接口
        // 构建表单数据
        let formData = new FormData()
        formData.append('title', title)
        formData.append('username', JSON.parse(sessionStorage.getItem('userInfo')).username)
        axios.post('http://localhost:9527/backlog/addBacklog', formData).then(res => {
          if(res.data.code === 200) {
            // 成功之后 重新刷新todoList 即再次调用获取所有待办事项的方法
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      },
      // 删除待办事项的方法
      deleteBacklog(id) {
        // 构建表单数据
        let formData = new FormData()
        formData.append('id', id)
        formData.append('username', JSON.parse(sessionStorage.getItem('userInfo')).username)
        axios.post('http://localhost:9527/backlog/deleteBacklog', formData).then(res => {
          if(res.data.code === 200) {
            // 成功之后 刷新list
            this.getAllBacklog()
          } else if(res.data.code === 519) {
            // 表示用户身份认证信息 过期 跳转到登录页面
            alert('用户身份认证信息过期, 请重新登录')
            window.location.href = 'login.html#/login'
          }
        })
      }
    },
    mounted() {
      // 当页面dom渲染好之后 进行自动登录的请求
      this.autoTakeUserInfo()
      // 然后调用 获取所有待办事项的方法
      this.getAllBacklog()
    }
  }
</script>

<style>
</style>
