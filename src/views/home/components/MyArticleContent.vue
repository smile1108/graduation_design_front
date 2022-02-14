<template>
    <div class="articleContent"><span class="article">内容内容</span></div>
</template>

<script>
    export default {
        name: "MyArticleContent"
    }
</script>

<style>
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
</style>