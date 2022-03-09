<template>
    <div id="articleTopMessage">
        <div class="articleTitle">{{article.title}}</div>
        <div class="authorMessage clearfix">
            <img :src="article.userVo.profile" alt="头像" class="profile">
            <div class="otherMessage">
                <div class="nicknameDiv">{{article.userVo.nickname}}</div>
                <div class="studentMessage">
                    <span class="school">{{article.userVo.school}}</span>
                    <span class="college">{{article.userVo.college}}</span>
                </div>
            </div>
            <div class="followBtn" :class="[{follow: !article.follow}, {unfollow: article.follow}]">{{article.follow ? "取消关注" : "关注作者"}}</div>
        </div>
        <div class="likeMessage">{{article.likeCount}} 人喜欢该文章</div>
    </div>
</template>

<script>
    export default {
        name: "ArticleTopMessage",
        props: {
            article: Object
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

    #articleTopMessage {
        height: 210px;
        padding: 10px 30px;
        box-sizing: border-box;
        background-color: #FFF;
        border-radius: 4px;
    }

    #articleTopMessage .articleTitle {
        font-size: 30px;
        font-weight: 800;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
    }

    #articleTopMessage .authorMessage {
        margin-top: 10px;
        height: 100px;
    }

    #articleTopMessage .authorMessage .profile {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 10px;
        float: left;
    }

    #articleTopMessage .authorMessage .otherMessage {
        padding: 6px;
        box-sizing: border-box;
        height: 80px;
        width: 400px;
        margin-left: 20px;
        margin-top: 10px;
        float: left;
    }

    #articleTopMessage .authorMessage .otherMessage .nicknameDiv {
        font-size: 20px;
        font-weight: 600;
    }

    #articleTopMessage .authorMessage .otherMessage .studentMessage {
        margin-top: 8px;
        color: #8590a6;
    }

    #articleTopMessage .authorMessage .otherMessage .studentMessage .college {
        margin-left: 6px;
    }

    #articleTopMessage .authorMessage .followBtn {
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100px;
        border-radius: 4px;
        margin-top: 24px;
        margin-left: 200px;
        color: #FFF;
    }

    #articleTopMessage .authorMessage .follow {
        background-color: #3a74ca;
        border: 1px solid #3a74ca;
    }

    #articleTopMessage .authorMessage .unfollow {
        background-color: #757a81;
        border: 1px solid #757a81;
    }

    #articleTopMessage .authorMessage .follow:hover {
        cursor: pointer;
        background-color: #143f80;
    }

    #articleTopMessage .authorMessage .unfollow:hover {
        cursor: pointer;
        background-color: #3a3e44;
    }

    #articleTopMessage .likeMessage {
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        font-size: 14px;
        color: #8590a6;
    }
</style>