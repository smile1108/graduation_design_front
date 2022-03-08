<template>
  <div id="articleList">
      <div class="articleDiv" v-for="article in articles" :key="article.id">
          <h2 class="articleTitle">{{article.title}}</h2>
          <div class="articleContent">{{article.textContent}}</div>
          <div class="authorMsg">
              <img :src="article.userVo.profile" alt="头像" @click="jumpAuthorHome(article.userVo)">
              <div class="authorName">{{article.userVo.nickname}}</div>
              <div class="userOperator">
                  <div class="likeDiv">
                      <span class="iconfont" :class="{colorRed: article.like}" @click="clickIcon(article)">{{article.like ? "&#xe86f;" : "&#xe870;"}}</span><span class="like" :class="{colorRed: article.like}" @click="clickFont(article)">{{article.like ? "取消喜欢" : "喜欢"}}</span>
                  </div>
                  <div class="classifyDiv">{{article.classifyVo.name}}</div>
                  <div class="publishDate">发布于{{formatDate(article.publishDate)}}</div>
                  <div v-if="userInfo == null || userInfo.username != article.userVo.username" :class="[{followBtn: !article.follow},{unfollowBtn: article.follow}]"
                  @click="clickFollow(article)"><span class="iconfont">{{article.follow ? "" : "&#xe603;"}}</span>{{article.follow ? "取消关注" : "关注作者"}}</div>
              </div>
          </div>
      </div>
      <div v-if="sumPage < 1" class="articleListTip">
          没有找到你需要的文章
      </div>
      <PageComponent :pageMax="sumPage" @changePage="changePage"></PageComponent>
  </div>
</template>

<script>
    import PageComponent from './pageComponent'
    import axios from 'axios'

    export default {
        name: 'MyArticleList',
        components: {
            PageComponent
        },
        props: {
            articles: Array,
            sumPage: Number,
            userInfo: Object
        },
        data() {
            return {
            }
        },
        computed: {
            formatDate() {  
                return function(publishDate) {
                    const arr = publishDate.split('T');
                    const d = arr[0];

                    const t = arr[1];
                    const tarr = t.split('.000');
                    const marr = tarr[0].split(':');

                    const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                    return dd;
                }
            }
        },
        methods: {
            jumpAuthorHome(user) {
                // 这里要根据点击的用户名 来获取对应的用户信息
                // 然后跳转到home page
                window.location.href = 'home.html#/' +  user.username
            },
            // 点击关注按钮之后调用的方法
            clickFollow(article) {
                if(this.userInfo == null || this.userInfo == undefined) {
                    // 如果当前userInfo 为null  代表没有登录 此时不能进行喜欢操作 要跳转到登录页面
                    alert("进行此操作,需要您先登录")
                    window.location.href = 'login.html'
                } else {
                    // 根据当前文章是否喜欢 来调用后端喜欢或者不喜欢的接口
                    if(article.follow) {
                        this.callUnfollow(this.userInfo.username, article)
                    } else {
                        // 否则调用喜欢的接口
                        this.callFollow(this.userInfo.username, article)
                    }
                }
            },
            // 点击喜欢的iconfont的方法
            clickIcon(article) {
                if(this.userInfo == null || this.userInfo == undefined) {
                    // 如果当前userInfo 为null  代表没有登录 此时不能进行喜欢操作 要跳转到登录页面
                    alert("进行此操作,需要您先登录")
                    window.location.href = 'login.html'
                } else {
                    // 根据当前文章是否喜欢 来调用后端喜欢或者不喜欢的接口
                    if(article.like) {
                        this.callUnlike(this.userInfo.username, article)
                    } else {
                        // 否则调用喜欢的接口
                        this.callLike(this.userInfo.username, article)
                    }
                }
            },
            // 点击喜欢 字体的方法
            clickFont(article) {
                if(this.userInfo == null || this.userInfo == undefined) {
                    // 如果当前userInfo 为null  代表没有登录 此时不能进行喜欢操作 要跳转到登录页面
                    alert("进行此操作,需要您先登录")
                    window.location.href = 'login.html'
                } else {
                    // 根据当前文章是否喜欢 来调用后端喜欢或者不喜欢的接口
                    if(article.like) {
                        this.callUnlike(this.userInfo.username, article)
                    } else {
                        // 否则调用喜欢的接口
                        this.callLike(this.userInfo.username, article)
                    }
                }
            },
            callUnfollow(username, article) {
                let url = "http://localhost:9527/user/unfollow?username=" + username + "&followUsername=" + article.userVo.username
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.$emit('refreshArticles')
                    } else if(res.data.code === 519) {
                        // 表示用户身份认证信息 过期 跳转到登录页面
                        alert('用户身份认证信息过期, 请重新登录')
                        window.location.href = 'login.html#/login'
                    }
                })
            },
            callFollow(username, article) {
                let url = "http://localhost:9527/user/follow?username=" + username + "&followUsername=" + article.userVo.username
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        this.$emit('refreshArticles')
                    } else if(res.data.code === 519) {
                        // 表示用户身份认证信息已经过期 跳转到登录页面
                        alert('用户身份认证信息过期, 请重新登录')
                        window.location.href = 'login.html#/login'
                    }
                })
            },
            callUnlike(username, article) {
                // 代表当前是喜欢的状态 就调用不喜欢的接口
                let url = "http://localhost:9527/article/unlike?username=" + username + "&articleId=" + article.id
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        article.like = !article.like
                    } else if(res.data.code === 519) {
                        // 表示用户身份认证信息 过期 跳转到登录页面
                        alert('用户身份认证信息过期, 请重新登录')
                        window.location.href = 'login.html#/login'
                    }
                })
            },
            callLike(username, article) {
                let url = "http://localhost:9527/article/like?username=" + username + "&articleId=" + article.id
                axios.get(url).then(res => {
                    if(res.data.code === 200) {
                        article.like = !article.like
                    } else if(res.data.code === 519) {
                        // 表示用户身份认证信息 过期 跳转到登录页面
                        alert('用户身份认证信息过期, 请重新登录')
                        window.location.href = 'login.html#/login'
                    }
                })
            },
            changePage(page) {
                this.$emit('changePage', page)
            }
        }
    }
</script>

<style>

    .colorRed {
        color: rgb(185, 47, 4) !important;
    }

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

    #articleList {
        float: left;
        margin-top: 15px;
        padding: 10px 0;
        box-sizing: border-box;
        width: 900px;
        height: 95%;
        border-radius: 3px;
        background-color: #fff;
    }

    #articleList .articleListTip {
        width: 50%;
        height: 200px;
        margin: 0 auto;
        text-align: center;
        line-height: 200px;
        font-size: 20px;
        color: #ce3434;
        box-sizing: border-box;
    }

    #articleList .articleDiv {
        width: 100%;
        height: 110px;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
        border-left: none;
        border-right: none;
    }

    #articleList .articleDiv:hover {
        cursor: pointer;
        background-color: rgb(233, 232, 232);
    }

    #articleList .articleDiv .articleTitle {
        font-weight: 600;
        font-size: 18px;
    }

    #articleList .articleDiv .articleTitle:hover {
        color: #175199;
        cursor: pointer;
    }

    #articleList .articleDiv .articleContent {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #articleList .articleDiv .articleContent:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg {
        width: 100%;
        height: 34px;
        margin-top: 5px;
        box-sizing: border-box;
    }

    #articleList .articleDiv .authorMsg img {
        float: left;
        width: 30px;
        height: 30px;
        margin: 3px 8px 0 5px;
        line-height: 30px;
        border-radius: 50%;
    }

    #articleList .articleDiv .authorMsg img:hover {
        cursor: pointer;
    }

    #articleList .articleDiv .authorMsg .authorName {
        float: left;
        margin: 12px 10px 0 0;
        font-weight: 700;
    }

    #articleList .articleDiv .authorMsg .authorName:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg .userOperator {
        float: left;
        margin-left: 30px;
    }

    #articleList .articleDiv .authorMsg .userOperator .likeDiv {
        float: left;
    }

    #articleList .articleDiv .authorMsg .userOperator .classifyDiv {
        float: left;
        margin-top: 14px;
        margin-left: 80px;
        font-size: 14px;
        font-weight: 600;
        color: #0066FF;
    }

    #articleList .articleDiv .authorMsg .userOperator .likeDiv .iconfont {
        font-size: 18px;
        font-weight: 600;
        float: left;
        display: block;
        margin-top: 14px;
    }

    #articleList .articleDiv .authorMsg .userOperator .likeDiv .like {
        font-size: 14px;
        font-weight: 600;
        float: left;
        display: block;
        margin-top: 14px;
        margin-left: 2px;
    }

    #articleList .articleDiv .authorMsg .userOperator .likeDiv .like:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg .userOperator .likeDiv .iconfont:hover {
        cursor: pointer;
        color: #175199;
    }

    #articleList .articleDiv .authorMsg .userOperator .publishDate {
        float: left;
        margin-top: 14px;
        margin-left: 50px;
        font-size: 14px;
        color: #42474d;
    }

    #articleList .articleDiv .authorMsg .userOperator .followBtn {
        float: left;
        margin-top: 8px;
        margin-left: 50px;
        background-color: #3a74ca;
        width: 100px;
        line-height: 26px;
        text-align: center;
        color: #fff;
        border: 1px solid #3a74ca;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 3px;
    }

    #articleList .articleDiv .authorMsg .userOperator .unfollowBtn {
        float: left;
        margin-top: 8px;
        margin-left: 50px;
        background-color: #757a81;
        width: 100px;
        line-height: 26px;
        text-align: center;
        color: #fff;
        border: 1px solid #757a81;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 3px;
    }

    #articleList .articleDiv .authorMsg .userOperator .unfollowBtn:hover {
        background-color: #3a3e44;
    }

    #articleList .articleDiv .authorMsg .userOperator .followBtn:hover {
        background-color: #143f80;
    }

    #articleList .articleDiv .authorMsg .userOperator .followBtn .iconfont {
        font-size: 12spx;
        margin-right: 4px;
    }
</style>