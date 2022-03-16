<template>
    <div id="answerList">
        <AnswerItem v-for="answerObj in answerList" :key="answerObj.id" :answerObj="answerObj"></AnswerItem>
    </div>
</template>

<script>

    import AnswerItem from './AnswerItem'

    export default {
        name: "AnswerList",
        components: {
            AnswerItem
        },
        props: {
            answerList: Array,
            answerTotal: Number,
            answerCount: Number
        }
    }
</script>

<style>
    #answerList {
        border-top: 2px solid #ebebeb;
        margin-top: 10px;
        padding: 10px 20px;
        box-sizing: border-box;
    }
</style>