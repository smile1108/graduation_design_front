<template>
    <div id="articleItem">
        <div class="articleHeader"><span class="articleTitle">题目</span></div>
        <div class="articleContent"><span class="article">内容内容</span></div>
        <div class="articleFooter">
            <div class="classify">计算机类</div>
            <span class="likeContent">10人喜欢</span>
            <span class="publishDate">发布于 2021-2-14 10:00:00</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyArticleItem",
        components: {

        }
    }
</script>

<style>
    #articleItem {
        height: 110px;
        width: 70%;
        padding: 6px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(240, 242, 247);
    }

    #articleItem:hover {
        cursor: pointer;
        background-color: rgb(233, 232, 232);
    }

    #articleItem .articleHeader {
        padding-left: 20px;
    }

    #articleItem .articleHeader .articleTitle {
        font-size: 22px;
    }

    #articleItem .articleHeader .articleTitle:hover {
        color: rgb(93, 92, 97);
    }

    #articleItem .articleContent {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 6px 0 6px 20px;
    }

    #articleItem .articleContent .article {
        font-size: 18px;
    }

    #articleItem .articleContent .article:hover {
        color: rgb(93, 92, 97);
    }

    #articleItem .articleFooter {
        font-size: 14px;
        padding-top: 4px;
    }

    #articleItem .articleFooter .classify {
        display: inline;
        margin-left: 40px;
        padding: 4px;
        font-weight: 600;
        color: rgb(128, 59, 218);
    }

    #articleItem .articleFooter .likeContent {
        margin-left: 50px;
        color: rgb(94, 61, 102);
    }

    #articleItem .articleFooter .publishDate {
        margin-left: 50px;
        color: rgb(84, 64, 110);
    }
</style>