<template>
    <div class="articleFooter">
        <div class="classify">{{this.articleObj.classifyVo.name}}</div>
        <span class="likeContent">10人喜欢</span>
        <span class="publishDate">发布于 {{this.articleObj.publishDate}}</span>
        <div class="deleteBtn">删除</div>
    </div>
</template>

<script>
    export default {
        name: "MyArticleFooter",
        props: {
            articleObj: Object
        }
    }
</script>

<style>
    .articleFooter {
        font-size: 14px;
        padding-top: 4px;
    }

    .articleFooter .classify {
        display: inline;
        margin-left: 40px;
        padding: 4px;
        font-weight: 600;
        color: rgb(128, 59, 218);
    }

    .articleFooter .likeContent {
        margin-left: 50px;
        color: rgb(94, 61, 102);
    }

    .articleFooter .publishDate {
        margin-left: 50px;
        color: rgb(84, 64, 110);
    }

    .articleFooter .deleteBtn {
        display: inline;
        background-color: #da4f49;
        border: 1px solid #bd362f;
        padding: 4px;
        margin-left: 80px;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
    }

    .articleFooter .deleteBtn:hover {
        cursor: pointer;
        background-color: #bd362f;
    }
</style>