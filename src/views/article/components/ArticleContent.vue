<template>
    <div id="articleContent" v-html="article.htmlContent">
    </div>
</template>

<script>
    export default {
        name: "ArticleContent",
        props: {
            article: Object
        }
    }
</script>

<style>
    #articleContent {
        padding: 0 30px 20px;
        box-sizing: border-box;
        width: 760px;
    }

    #articleContent img {
        border:0;
        margin:0;
        padding:0;
        max-width: 590px;
        max-height: 590px;
    }
</style>