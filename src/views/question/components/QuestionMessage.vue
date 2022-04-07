<template>
    <div id="questionMessage" class="clearfix">
        <QuestionTopMessage :question="question" :userInfo="userInfo" :answerTotal="answerTotal"></QuestionTopMessage>
        <QuestionContent :question="question" :showImageSrc="showImageSrc" @changeEnlargeImageSrc="changeEnlargeImageSrc"
        @changeShowEnlargeImage="changeShowEnlargeImage"></QuestionContent>
        <AuthorMessage :article="question" :articleNumber="articleNumber" :likeNumber="likeNumber"
        :followerNumber="followerNumber"></AuthorMessage>
        <QuestionAnswer :question="question" :userInfo="userInfo" :answerList="answerList"
        :answerTotal="answerTotal" :answerCount="answerCount" @showMoreAnswer="showMoreAnswer"
        :showImageSrc="showImageSrc" @changeEnlargeImageSrc="changeEnlargeImageSrc"
        @changeShowEnlargeImage="changeShowEnlargeImage"></QuestionAnswer>
        <div id="popLayer" :class="{showEnlargeImage: !showEnlargeImage}">
            <span class="iconfont" @click="closeEnlargeImage()">&#xe8dc;</span>
            <img :src="showImageSrc" alt="">
        </div>
    </div>
</template>

<script>

    import QuestionTopMessage from './QuestionTopMessage'
    import QuestionContent from './QuestionContent'
    import AuthorMessage from '../../article/components/AuthorMessage'
    import QuestionAnswer from './QuestionAnswer'

    export default {
        name: "QuestionMessage",
        components: {
            QuestionContent, QuestionTopMessage, AuthorMessage, QuestionAnswer
        },
        data() {
            return {
                showImageSrc: '',
                showEnlargeImage: false
            }
        },
        props: {
            question: Object,
            userInfo: Object,
            articleNumber: Number,
            likeNumber: Number,
            followerNumber: Number,
            answerList: Array,
            answerTotal: Number,
            answerCount: Number
        },
        methods: {
            showMoreAnswer() {
                this.$emit('showMoreAnswer')
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
        }
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

    #questionMessage {
        width: 70%;
        margin: 0 auto;
    }

    #questionMessage #popLayer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1600;
        background-color: rgba(136, 132, 132, 0.9);
    }

    #questionMessage #popLayer .iconfont {
        font-size: 42px;
        float: right;
        margin-right: 30px;
        margin-top: 10px;
        color: rgb(63, 57, 57);
    }

    #questionMessage #popLayer .iconfont:hover {
        color: rgb(180, 67, 67);
        cursor: pointer;
    }

    #questionMessage #popLayer img {
        max-height: 90vh;
        min-height: 80vh;
        margin: 0 auto;
        display: block;
        margin-top: 40px;
    }
</style>