<template>
    <div id="articleMessage" class="clearfix">
        <ArticleTopMessage :article="article"></ArticleTopMessage>
        <ArticleContent :article="article"></ArticleContent>
        <AuthorMessage :article="article"></AuthorMessage>
    </div>
</template>

<script>

    import ArticleTopMessage from './ArticleTopMessage'
    import ArticleContent from './ArticleContent'
    import AuthorMessage from './AuthorMessage'

    export default {
        name: "ArticleMessage",
        components: {
            ArticleTopMessage, ArticleContent, AuthorMessage
        },
        props: {
            article: Object
        }
    }
</script>

<style>

    .clearfix:before,
    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    #articleMessage {
        width: 70%;
        margin: 0 auto;
    }
</style>