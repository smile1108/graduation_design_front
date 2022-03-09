<template>
    <div id="articleMessage">
        <ArticleTopMessage :article="article"></ArticleTopMessage>
    </div>
</template>

<script>

    import ArticleTopMessage from './ArticleTopMessage'

    export default {
        name: "ArticleMessage",
        components: {
            ArticleTopMessage
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