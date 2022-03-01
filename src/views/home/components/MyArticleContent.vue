<template>
    <div class="articleContent"><span class="article">{{this.articleContent}}</span></div>
</template>

<script>
    export default {
        name: "MyArticleContent",
        props: {
            articleContent: String
        }
    }
</script>

<style>
    .articleContent {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 6px 0 6px 20px;
    }

    .articleContent .article {
        font-size: 18px;
    }

    .articleContent .article:hover {
        color: rgb(93, 92, 97);
    }
</style>