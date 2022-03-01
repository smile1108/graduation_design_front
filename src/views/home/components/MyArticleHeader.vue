<template>
    <div class="articleHeader"><span class="articleTitle">{{this.articleTitle}}</span></div>
</template>

<script>
    export default {
        name: "MyArticleHeader",
        props: {
            articleTitle: String
        }
    }
</script>

<style>
    .articleHeader {
        padding-left: 20px;
    }

    .articleHeader .articleTitle {
        font-size: 22px;
    }

    .articleHeader .articleTitle:hover {
        color: rgb(93, 92, 97);
    }
</style>