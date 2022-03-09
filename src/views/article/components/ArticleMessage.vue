<template>
    <div id="articleMessage">
        <ArticleTopMessage :article="article"></ArticleTopMessage>
        <ArticleContent :article="article"></ArticleContent>
    </div>
</template>

<script>

    import ArticleTopMessage from './ArticleTopMessage'
    import ArticleContent from './ArticleContent'

    export default {
        name: "ArticleMessage",
        components: {
            ArticleTopMessage, ArticleContent
        },
        props: {
            article: Object
        }
    }
</script>

<style>
    #articleMessage {
        width: 70%;
        margin: 0 auto;
    }
</style>