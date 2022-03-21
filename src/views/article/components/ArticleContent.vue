<template>
    <div id="articleContent" v-html="article.htmlContent"></div>
</template>

<script>

    export default {
        name: "ArticleContent",
        props: {
            article: Object
        },
        components: {
            
        }
    }
</script>

<style>
    #articleContent {
        padding: 0 30px 20px;
        box-sizing: border-box;
        width: 760px;
        float: left;
        min-height: 280px;
        border-bottom: 2px solid #ebebeb;
    }

    #articleContent img {
        border:0;
        margin:0;
        padding:0;
        max-width: 590px;
        max-height: 590px;
    }

    #articleContent pre {
        background-color: #FFF;
        padding: 10px;
        font-size: 16px;
        line-height: 24px;
        overflow: auto;
    }
</style>