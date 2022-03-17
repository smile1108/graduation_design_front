<template>
  <div id="header">
      <ul class="tabs">
          <router-link class="tabItem" to="/home" active-class="active">首页</router-link>
          <router-link class="tabItem" to="/problem" active-class="active">等你来答</router-link>
          <router-link class="tabItem" to="/todoList" active-class="active" v-if="userInfo !== null">待办事项</router-link>
      </ul>
      <div class="search">
          <input class="inputText" type="text" v-model="searchContent" placeholder="请输入搜索关键字">
          <button class="btn" @click="search()"><span class="iconfont">&#xe600;</span>搜索</button>
          <button class="questionBtn">提问</button>
      </div>
      <div class="userInfo">
          <a href="login.html" v-if="userInfo === null"><button class="loginBtn">登录 / 注册</button></a>
          <div class="userFunction" v-else>
              <img class="userImg" :src="userInfo.profile" alt="头像" @click="jumpToHome()">
              <div class="iconfont logout" @click="logout()">&#xe60e; 退出登录</div>
          </div>
      </div>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "MyHeader",
        components: {

        },
        props: {
            userInfo: Object,
        },
        data() {
            return {
                searchContent: ""
            }
        },
        methods: {
            logout() {
                // 发送退出登录的请求 到后端 后端删除对应的userCookie
                axios.get("http://localhost:9527/user/logout?username=" + this.userInfo.username).then(res => {
                    if(res.data.code == 200) {
                        this.$emit("deleteUserInfo")
                    }
                })
            },
            jumpToHome() {
                // 当点击Header中的头像时 跳转到自己的主页
                window.location.href = 'home.html#/' + this.userInfo.username
            },
            search() {
                if(this.$route.path == '/home') {
                    this.$emit('searchArticle', this.searchContent)
                } else if(this.$route.path == '/problem') {
                    this.$emit('searchQuestion', this.searchContent)
                }
                
            }
        }
    }
</script>

<style>

    @font-face {
    font-family: 'iconfont';
    src: url('../icon/iconfont.woff2?t=1636981770201') format('woff2'),
        url('../icon/iconfont.woff?t=1636981770201') format('woff'),
        url('../icon/iconfont.ttf?t=1636981770201') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    .active {
        font-weight: 600;
        color: #121212 !important;
        border-bottom: 4px solid #0066FF;
    }

    #header {
        width: 100%;
        height: 52px;
        background-color: #fff;
    }

    #header .tabs {
        overflow: hidden;
        padding-left: 100px;
        box-sizing: border-box;
        width: 40%;
        height: 100%;
        float: left;
    }

    #header .tabs .tabItem {
        padding: 0 15px;
        box-sizing: border-box;
        font-size: 15px;
        height: 52px;
        line-height: 52px;
        float: left;
        text-align: center;
        width: 100px;
        color: #8590A6;
    }

    #header .tabs .tabItem:hover{
        cursor: pointer;
        color: #121212;
    }

    #header .search {
        overflow: hidden;
        padding: 8px 0;
        width: 40%;
        height: 100%;
        float: left;
        box-sizing: border-box;
    }

    #header .search .inputText {
        vertical-align: middle;
        width: 300px;
        height: 34px;
        background-color: #f6f6f6;
        border: 1px solid #f6f6f6;
        border-right: none;
        text-indent: 16px;
        font-size: 14px;
        border-radius: 6px 0 0 6px;
        box-sizing: border-box;
    }

    #header .search .btn {
        border: 1px solid #0066FF;
        height: 34px;
        width: 80px;
        font-size: 17px;
        text-align: center;
        line-height: 28px;
        box-sizing: border-box;
        color: #fff;
        background-color: #0066FF;
        border-radius: 0 6px 6px 0;
    }

    #header .search .btn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #header .search .questionBtn {
        margin-left: 20px;
        width: 64px;
        height: 34px;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #header .search .questionBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #header .userInfo {
        padding-top: 8px;
        box-sizing: border-box;
        height: 100%;
        width: 20%;
        float: left;
    }

    #header .userInfo .loginBtn {
        margin-left: 80px;
        width: 100px;
        height: 34px;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #header .userInfo .loginBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #header .userInfo .userFunction {
        line-height: 100%;
    }

    #header .userInfo .userFunction .userImg {
        margin-left: 100px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;
    }

    #header .userInfo .userFunction .userImg:hover {
        cursor: pointer;
    }

    #header .userInfo .userFunction .logout {
        margin-left: 20px;
        color: rgb(221, 61, 61);
        font-size: 14px;
        font-weight: 600;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
        padding: 0 5px;
        float: left;
    }

    #header .userInfo .userFunction .logout:hover {
        cursor: pointer;
    }


</style>