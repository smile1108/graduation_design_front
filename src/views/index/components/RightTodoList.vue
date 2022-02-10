<template>
  <div id="todoList">
      <div class="todoListTitle"><span class="iconfont">&#xe65d;</span> 我的代办事项</div>
      <div class="content clearfix">
          <a href="login.html" class="loginBtn" v-if="userInfo === null">请先登录</a>
          <div class="todoList" v-else>
              <div v-if="todoList.length != 0">
                    <ul class="todoListContent">
                        <li v-for="todoObj in todoList.slice(0,3)" :key="todoObj.id">{{todoObj.title}}</li>
                    </ul>
                    <router-link class="checkTodoListBtn" to="/todoList">查看全部待办事项</router-link>
              </div>
              <div class="emptyTodoListDiv" v-else>
                    <span class="emptyTodoListTips">空空如也 快去添加吧</span>
                    <router-link class="checkTodoListBtn addTodoListBtn" to="/todoList" :todoList="todoList">点击添加待办事项</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'RightTodoList',
        components: {

        },
        props: {
            userInfo: Object,
            todoList: Array
        },
        data() {
            return {
                
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
        width: 100%;
        height: 200px;
        margin: 0 auto;
        padding: 10px 5px;
        box-sizing: border-box;
        border-radius: 4px;
        background-color: #fff;
    }

    #todoList .todoListTitle {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
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

    #todoList .content .addTodoListBtn {
        margin-top: 40px !important;
    }


    #todoList .content .todoList .emptyTodoListDiv {
        padding-top: 50px;
    }

    #todoList .content .todoList .emptyTodoListTips {
        margin-left: 30px;
        font-size: 14px;
    }
</style>