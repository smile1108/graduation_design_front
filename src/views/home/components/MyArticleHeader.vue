<template>
    <div class="articleHeader"><span class="articleTitle">题目</span></div>
</template>

<script>
    export default {
        name: "MyArticleHeader"
    }
</script>

<style>
    #articleItem .articleHeader {
        padding-left: 20px;
    }

    #articleItem .articleHeader .articleTitle {
        font-size: 22px;
    }

    #articleItem .articleHeader .articleTitle:hover {
        color: rgb(93, 92, 97);
    }
</style>