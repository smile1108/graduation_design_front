<template>
    <div id="articleMessage" class="clearfix">
        <ArticleTopMessage :article="article" :userInfo="userInfo"></ArticleTopMessage>
        <ArticleContent :article="article" :showImageSrc="showImageSrc" @changeEnlargeImageSrc="changeEnlargeImageSrc"
        @changeShowEnlargeImage="changeShowEnlargeImage"></ArticleContent>
        <AuthorMessage :article="article" :articleNumber="articleNumber" :likeNumber="likeNumber"
        :followerNumber="followerNumber" :userInfo="userInfo"></AuthorMessage>
        <ArticleComment :article="article" :commentList="commentList" :commentTotal="commentTotal" :commentNumber="commentNumber"
        @showMoreComment="showMoreComment" :userInfo="userInfo"></ArticleComment>
        <div id="popLayer" :class="{showEnlargeImage: !showEnlargeImage}">
            <span class="iconfont" @click="closeEnlargeImage()">&#xe8dc;</span>
            <img :src="showImageSrc" alt="">
        </div>
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
        data() {
            return {
                showImageSrc: '',
                showEnlargeImage: false
            }
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
            },
            changeShowEnlargeImage(show) {
                this.showEnlargeImage = show
            },
            changeEnlargeImageSrc(src) {
                this.showImageSrc = src
            },
            closeEnlargeImage() {
                this.showEnlargeImage = false
            }
        },
    }
</script>

<style>

    .showEnlargeImage {
        display: none;
    }

    @font-face {
    font-family: 'iconfont';
    src: url('../icon/iconfont.woff2?t=1636981770201') format('woff2'),
        url('../icon/iconfont.woff?t=1636981770201') format('woff'),
        url('../icon/iconfont.ttf?t=1636981770201') format('truetype');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

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

    #articleMessage #popLayer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1600;
        background-color: rgba(136, 132, 132, 0.9);
    }

    #articleMessage #popLayer .iconfont {
        font-size: 42px;
        float: right;
        margin-right: 30px;
        margin-top: 10px;
        color: rgb(63, 57, 57);
    }

    #articleMessage #popLayer .iconfont:hover {
        color: rgb(180, 67, 67);
        cursor: pointer;
    }

    #articleMessage #popLayer img {
        max-height: 90vh;
        min-height: 80vh;
        margin: 0 auto;
        display: block;
        margin-top: 40px;
    }
</style>