<template>
  <div id="todoList">
      <div class="todoListTitle"><span class="iconfont">&#xe65d;</span> 我的代办事项</div>
      <div class="content clearfix">
          <a href="login.html" target="_blank" class="loginBtn" v-if="userInfo === null">请先登录</a>
          <div class="todoList" v-else>
              <ul class="todoListContent">
                  <li v-for="todoObj in todoList" :key="todoObj.id">{{todoObj.title}}</li>
              </ul>
              <router-link class="checkTodoListBtn" to="/todoList">查看全部待办事项</router-link>
          </div>
      </div>
      <a href="write.html" target="_blank">写文章</a>
  </div>
</template>

<script>
    export default {
        name: 'RightTodoList',
        data() {
            return {
                // userInfo: {
                //     img: "https://pic3.zhimg.com/v2-e1f2203a6aebdb8ef688bc7de67b0685.jpg?source=6a64a727"
                // },
                userInfo: null,
                todoList: [
                    {id: "001", title: "吃饭", done: false},
                    {id: "002", title: "游戏", done: false},
                    {id: "003", title: "开车", done: false},
                ],
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

    #todoList {
        width: 95%;
        height: 200px;
        margin: 5px auto;
        border: 1px solid black;
    }

    #todoList .todoListTitle {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
    }

    #todoList .todoListTitle span {
        font-size: 16px;
        margin-left: 10px;
    }

    #todoList .content {
        height: 140px;
    }

    #todoList .content .loginBtn {
        display: block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin: 45px auto;
        border-radius: 12px;
        font-size: 14px;
        color: #fff;
        background-color: #0066FF;
    }

    #todoList .content .loginBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #todoList .content .todoListContent {
        margin-top: 10px;
    }

    #todoList .content .todoListContent li {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        border: 1px solid rgb(240, 242, 247);
        display: block;
        width: 90%;
        margin: 0 auto;
        border-top: none;
        border-left: none;
        border-right: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #todoList .content .checkTodoListBtn {
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-top: 20px;
        color: #0066FF;
    }
</style>