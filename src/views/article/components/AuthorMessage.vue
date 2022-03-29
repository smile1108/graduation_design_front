<template>
    <div id="authorMessage">
        <div class="tip">关于作者</div>
        <div class="author clearfix">
            <img :src="article.userVo.profile" alt="头像" class="profile">
            <div class="textMessage">
                <div class="nickname">{{article.userVo.nickname}}</div>
                <div class="school">{{article.userVo.school}}</div>
            </div>
        </div>
        <div class="statistics clearfix">
            <div class="articleNum">
                <div class="articleNumberTip">文章</div>
                <div class="articleNumber">{{this.articleNumber}}</div>
            </div>
            <div class="likeNum">
                <div class="likeNumberTip">喜欢</div>
                <div class="likeNumber">{{this.likeNumber}}</div>
            </div>
            <div class="followerNum">
                <div class="followerNumberTip">关注者</div>
                <div class="followerNumber">{{this.followerNumber}}</div>
            </div>
        </div>
        <div class="functionalDiv" v-if="this.userInfo != null && this.userInfo.username == article.userVo.username">
            <div class="homeBtn" @click="jumpHome()">我的主页</div>
        </div>
        <div class="functionalDiv" v-else>
            <div class="otherHomeBtn" @click="jumpHome()">Ta的主页</div>
            <div class="chatBtn" @click="chat()">私信Ta</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "AuthorMessage",
        props: {
            article: Object,
            articleNumber: Number,
            likeNumber: Number,
            followerNumber: Number,
            userInfo: Object
        },
        data() {
            return {
                
            }
        },
        methods: {
            jumpHome() {
                window.location.href = "home.html#/" + this.article.userVo.username
            },
            chat() {
                let href = "chat.html#/" + this.article.userVo.username 
                window.open(href, "_blank")
            }
        }
    }
</script>

<style>

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    #authorMessage {
        float: left;
        width: 270px;
        margin-left: 20px;
        margin-top: 20px;
        padding: 6px;
        box-sizing: border-box;
        border: 2px solid #ebebeb;
        background-color: #FFF;
    }

    #authorMessage .tip {
        font-weight: 600;
        padding: 10px 4px;
        border-bottom: 2px solid #ebebeb;
    }

    #authorMessage .author {
        margin-top: 10px;
        border-bottom: 2px solid #ebebeb;
        padding: 6px;
    }

    #authorMessage .statistics {
        margin-top: 4px;
    }

    #authorMessage .functionalDiv {
        margin-top: 6px;
    }

    #authorMessage .author .profile {
        height: 76px;
        width: 76px;
        border-radius: 6px;
        float: left;
    }

    #authorMessage .author .textMessage {
        float: left;
        margin-left: 6px;
        margin-top: 4px;
        padding: 6px 10px;
    }

    #authorMessage .author .textMessage .nickname {
        font-size: 18px;
        font-weight: 600;
        line-height: 30px;
    }

    #authorMessage .author .textMessage .school {
        color: #8590a6;
        margin-top: 4px;
    }

    #authorMessage .statistics .articleNum {
        height: 66px;
        width: 30%;
        float: left;
        margin-left: 4px;
        padding: 10px 4px;
        box-sizing: border-box;
    }

    #authorMessage .statistics .articleNum .articleNumberTip {
        font-size: 14px;
        color: #8590a6;
        text-align: center;
    }

    #authorMessage .statistics .articleNum .articleNumber {
        font-size: 18px;
        color: #121212;
        font-weight: 600;
        margin-top: 5px;
        text-align: center;
    }

    #authorMessage .statistics .likeNum {
        float: left;
        height: 66px;
        width: 30%;
        margin-left: 6px;
        padding: 10px 4px;
        box-sizing: border-box;
    }

    #authorMessage .statistics .likeNum .likeNumberTip {
        font-size: 14px;
        color: #8590a6;
        text-align: center;
    }

    #authorMessage .statistics .likeNum .likeNumber {
        font-size: 18px;
        color: #121212;
        font-weight: 600;
        margin-top: 5px;
        text-align: center;
    }

    #authorMessage .statistics .followerNum {
        float: left;
        height: 66px;
        width: 30%;
        margin-left: 6px;
        padding: 10px 4px;
        box-sizing: border-box;
    }

    #authorMessage .statistics .followerNum .followerNumberTip {
        font-size: 14px;
        color: #8590a6;
        text-align: center;
    }

    #authorMessage .statistics .followerNum .followerNumber {
        font-size: 18px;
        color: #121212;
        font-weight: 600;
        margin-top: 5px;
        text-align: center;
    }

    #authorMessage .functionalDiv .homeBtn {
        height: 30px;
        line-height: 30px;
        width: 100px;
        text-align: center;
        border: 1px solid black;
        margin: 0 auto;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
    }

    #authorMessage .functionalDiv .homeBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #authorMessage .functionalDiv .otherHomeBtn, .chatBtn {
        height: 30px;
        line-height: 30px;
        width: 100px;
        text-align: center;
        border: 1px solid black;
        border-radius: 6px;
        background-color: #0066FF;
        border: 1px solid #0066FF;
        color: #fff;
        display: inline-block;
        margin-left: 16px;
    }

    #authorMessage .functionalDiv .otherHomeBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }

    #authorMessage .functionalDiv .chatBtn:hover {
        cursor: pointer;
        background-color: #005ce6;
    }
</style>