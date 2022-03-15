<template>
    <div id="articleHeader" class="clearfix">
        <div class="articleTitleTip">{{question.title}}</div>
        <div class="writeBtn" @click="jumpWritePage()"><span class="iconfont">&#xe6e2;</span> 提问</div>
        <div class="userInfo">
          <a href="login.html" v-if="userInfo === null"><button class="loginBtn" @click="login()">登录</button></a>
          <div class="userFunction" v-else>
              <img class="userImg" :src="userInfo.profile" alt="头像">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "QuestioneHeader",
        props: {
            question: Object,
            userInfo: Object
        },
        methods: {
            jumpWritePage() {
                if(this.userInfo == null){
                    alert("请您先登录再进行此操作")
                    window.location.href = "login.html"
                } else {
                    window.location.href = "ask.html"
                }
            },
            login() {
                window.location.href = "login.html"
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

    #articleHeader {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #FFF;
        padding: 0 250px;
        position: fixed;
    }

    #articleHeader .articleTitleTip {
        float: left;
        font-size: 20px;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        padding: 0 20px;
        border-left: 2px solid #ebebeb;
    }

    #articleHeader .writeBtn {
        font-size: 20px;
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 10px;
        margin-left: 700px;
        width: 140px;
        color: #06f;
        border: 1px solid #06f;
        border-radius: 5px;
    }

    #articleHeader .writeBtn .iconfont {
        font-size: 24px;
    }

    #articleHeader .writeBtn:hover {
        background-color: rgba(0,102,255,.06);
        cursor: pointer;
    }

    #articleHeader .userInfo {
        height: 40px;
        float: left;
        margin-top: 10px;
        margin-left: 40px;
    }

    #articleHeader .userInfo .loginBtn {
        width: 100px;
        height: 34px;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
        float: left;
        margin-top: 4px;
    }

    #articleHeader .userInfo .loginBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #articleHeader .userInfo .userFunction .userImg {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }

    #articleHeader .userInfo .userFunction .userImg:hover {
        cursor: pointer;
    }
</style>