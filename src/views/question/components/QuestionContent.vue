<template>
    <div id="questionContent" v-html="question.htmlContent">
    </div>
</template>

<script>
    export default {
        name: "QuestionContent",
        props: {
            question: Object
        }
    }
</script>

<style>
    #questionContent {
        padding: 0 30px 20px;
        box-sizing: border-box;
        width: 760px;
        float: left;
        min-height: 280px;
        border-bottom: 2px solid #ebebeb;
    }

    #questionContent pre {
        background-color: #FFF;
        padding: 10px;
        font-size: 16px;
        line-height: 24px;
        overflow: auto;
    }
</style>