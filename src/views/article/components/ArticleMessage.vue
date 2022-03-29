<template>
    <div id="articleMessage" class="clearfix">
        <ArticleTopMessage :article="article" :userInfo="userInfo"></ArticleTopMessage>
        <ArticleContent :article="article"></ArticleContent>
        <AuthorMessage :article="article" :articleNumber="articleNumber" :likeNumber="likeNumber"
        :followerNumber="followerNumber" :userInfo="userInfo"></AuthorMessage>
        <ArticleComment :article="article" :commentList="commentList" :commentTotal="commentTotal" :commentNumber="commentNumber"
        @showMoreComment="showMoreComment" :userInfo="userInfo"></ArticleComment>
    </div>
</template>

<script>

    import ArticleTopMessage from './ArticleTopMessage'
    import ArticleContent from './ArticleContent'
    import AuthorMessage from './AuthorMessage'
    import ArticleComment from './ArticleComment'

    export default {
        name: "ArticleMessage",
        components: {
            ArticleTopMessage, ArticleContent, AuthorMessage, ArticleComment
        },
        props: {
            article: Object,
            userInfo: Object,
            articleNumber: Number,
            likeNumber: Number,
            followerNumber: Number,
            commentList: Array,
            commentTotal: Number,
            commentNumber: Number
        },
        methods: {
            showMoreComment() {
                this.$emit('showMoreComment')
            }
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