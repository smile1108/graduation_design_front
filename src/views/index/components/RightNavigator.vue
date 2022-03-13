<template>
  <div id="rightNavigator">
      <div class="navTitle"><span class="iconfont">&#xe651;</span> 页面导航</div>
      <div class="navContent">
          <a @click="clickJump('home')">
              <div class="home">
                <div class="iconfont">&#xe602;</div>
                <div class="homeTitle">主页</div>
              </div>
          </a>
          <a @click="clickJump('article')">
              <div class="writeArticle">
                <div class="iconfont">&#xe62e;</div>
                <div class="writeArticleTitle">写文章</div>
              </div>
          </a>
          <a @click="clickJump('question')">
              <div class="ask">
                <div class="iconfont">&#xe6e2;</div>
                <div class="askTitle">提问</div>
              </div>
          </a>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'RightNavigator',
        components: {

        },
        props: {
            userInfo: Object
        },
        methods: {
            clickJump(target) {
                if(this.userInfo === null) {
                    window.location.href = 'login.html'
                } else {
                    if(target === 'home') {
                        window.location.href = 'home.html#/' + this.userInfo.username
                    } else if(target === 'article') {
                        window.location.href = 'write.html'
                    } else if(target === 'question') {
                        window.location.href = 'question.html'
                    }
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

    #rightNavigator {
        width: 100%;
        height: 200px;
        margin-top: 10px;
        padding: 10px 5px;
        box-sizing: border-box;
        background-color: #fff;
    }

    #rightNavigator .navTitle {
        font-size: 18px;
        margin-left: 10px;
    }

    #rightNavigator .navTitle span {
        font-size: 16px;
    }

    #rightNavigator .navContent {
        padding: 5px 5px;
        margin-top: 14px;
    }

    #rightNavigator .navContent a > div {
        border-radius: 6px;
        width: 60px;
        height: 90px;
        float: left;
    }

    #rightNavigator .navContent a > div:hover {
        cursor: pointer;
        background-color: rgb(240, 242, 247);
    }

    #rightNavigator .navContent a > div .iconfont {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #0066FF;
        font-size: 34px;
    }

    #rightNavigator .navContent a > div div:last-child {
        line-height: 30px;
        font-size: 14px;
        text-align: center;
    }

    #rightNavigator .navContent .writeArticle .iconfont {
        color: rgb(197, 125, 18);
    }

    #rightNavigator .navContent .ask .iconfont {
        color: rgb(78, 177, 69);
    }
    /* #rightNavigator .navContent .home {
        border-radius: 6px;
        width: 60px;
        height: 90px;
        float: left;
    }

    #rightNavigator .navContent .home:hover {
        cursor: pointer;
        background-color: rgb(240, 242, 247);
    }

    #rightNavigator .navContent .home .iconfont {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #0066FF;
        font-size: 34px;
    }

    #rightNavigator .navContent .home .homeTitle {
        line-height: 30px;
        text-align: center;
    } */
</style>