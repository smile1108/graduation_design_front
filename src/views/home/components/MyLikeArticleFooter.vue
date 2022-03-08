<template>
    <div class="likeArticleFooter">
        <img class="authorProfile" :src="articleObj.userVo.profile" alt="头像">
        <div class="authorName">{{articleObj.userVo.nickname}}</div>
        <div class="classify">{{articleObj.classifyVo.name}}</div>
        <div class="likeCount">{{articleObj.likeCount}}人喜欢此文章</div>
        <div class="publishDate">发布于 {{this.formatDate}}</div>
        <div class="unlikeBtn" @click="unlike()">取消喜欢</div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "MyLikeArticleFooter",
        props: {
            articleObj: Object,
            userInfo: Object
        },
        computed: {
            formatDate() { 
                const arr = this.articleObj.publishDate.split('T');
                const d = arr[0];

                const t = arr[1];
                const tarr = t.split('.000');
                const marr = tarr[0].split(':');

                const dd = d + ' ' + marr[0] + ':' + marr[1] + ':' + marr[2].split('.')[0]

                return dd;
            }
        },
        methods: {
            unlike() {
                // 用户取消喜欢的方法
                if(confirm("您确定要取消收藏该文章吗?")) {
                    let url = "http://localhost:9527/article/unlike?username=" + this.userInfo.username + "&articleId=" + this.articleObj.id
                    axios.get(url).then(res => {
                        if(res.data.code === 200) {
                            this.$router.go(0)
                        } else if(res.data.code === 519) {
                            alert("用户登录信息认证已过期, 请重新登录")
                            window.location.href = "login.html#/login"
                        }
                    })
                }
            }
        }
    }
</script>

<style>

    .likeArticleFooter {
        font-size: 14px;
        padding-top: 4px;
    }

    .likeArticleFooter .authorProfile {
        width: 30px;
        height: 30px;
        margin: 0 10px 0 30px;
        border-radius: 50%;
        float: left;
    }

    .likeArticleFooter .authorName {
        display: inline;
        margin-top: 5px;
        float: left;
    }

    .likeArticleFooter .classify {
        float: left;
        display: inline;
        margin-left: 60px;
        margin-top: 5px;
        font-weight: 600;
        color: rgb(128, 59, 218);
    }

    .likeArticleFooter .likeCount {
        float: left;
        display: inline;
        margin-left: 20px;
        margin-top: 5px;
        color: rgb(84, 64, 110);
    }

    .likeArticleFooter .publishDate {
        float: left;
        display: inline;
        margin-left: 20px;
        margin-top: 5px;
        color: rgb(84, 64, 110);
    }

    .likeArticleFooter .unlikeBtn {
        background-color: #da4f49;
        border: 1px solid #bd362f;
        color: #FFF;
        display: inline-block;
        margin-left: 20px;
        padding: 0 6px;
        border-radius: 4px;
        margin-top: 5px;
    }

    .likeArticleFooter .unlikeBtn:hover {
        background-color: #bd362f;
        cursor: pointer;
    }
</style>