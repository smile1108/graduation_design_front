<template>
    <div class="likeArticleFooter">
        <img class="authorProfile" :src="articleObj.userVo.profile" alt="头像">
        <div class="authorName">{{articleObj.userVo.nickname}}</div>
        <div class="classify">{{articleObj.classifyVo.name}}</div>
        <div class="likeCount">{{articleObj.likeCount}}人喜欢此文章</div>
        <div class="publishDate">发布于 {{this.formatDate}}</div>
    </div>
</template>

<script>
    export default {
        name: "MyLikeArticleFooter",
        props: {
            articleObj: Object
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
</style>