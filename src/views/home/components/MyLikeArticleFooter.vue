<template>
    <div class="likeArticleFooter">
        <img class="authorProfile" src="http://localhost/images/default.png" alt="头像">
        <div class="authorName">作者姓名</div>
        <div class="classify">计算机类</div>
        <div class="publishDate">发布于 2021-2-14 10:00:00</div>
    </div>
</template>

<script>
    export default {
        name: "MyLikeArticleFooter"
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

    .likeArticleFooter .publishDate {
        float: left;
        display: inline;
        margin-left: 80px;
        margin-top: 5px;
        color: rgb(84, 64, 110);
    }
</style>