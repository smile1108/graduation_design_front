<template>
    <div id="questionMessage" class="clearfix">
        <QuestionTopMessage :question="question" :userInfo="userInfo"></QuestionTopMessage>
        <QuestionContent :question="question"></QuestionContent>
        <AuthorMessage :article="question" :articleNumber="articleNumber" :likeNumber="likeNumber"
        :followerNumber="followerNumber"></AuthorMessage>
    </div>
</template>

<script>

    import QuestionTopMessage from './QuestionTopMessage'
    import QuestionContent from './QuestionContent'
    import AuthorMessage from '../../article/components/AuthorMessage'

    export default {
        name: "QuestionMessage",
        components: {
            QuestionContent, QuestionTopMessage, AuthorMessage
        },
        props: {
            question: Object,
            userInfo: Object,
            articleNumber: Number,
            likeNumber: Number,
            followerNumber: Number,
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

    #questionMessage {
        width: 70%;
        margin: 0 auto;
    }
</style>