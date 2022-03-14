<template>
  <div id="problem">
      <MyProblemList :questions="questions" :questionSumPage="questionSumPage" @changePage="changePage"></MyProblemList>
      <RightFunction :userInfo="userInfo" :todoList="todoList"></RightFunction>
  </div>
</template>

<script>
    import RightFunction from './RightFunction'
    import MyProblemList from './MyProblemList'

    export default {
        name: 'MyProblem',
        components: {
            RightFunction, MyProblemList
        },
        props: {
            userInfo: Object,
            todoList: Array,
            questions: Array,
            questionSumPage: Number
        },
        methods: {
            changePage(page) {
                this.$emit('changePage', page)
            }
        },
        mounted() {
            this.$emit('refreshQuestions')
        }
    }
</script>

<style>
    #problem {
        width: 100%;
        height: calc(100vh - 52px);
        padding-left: 200px;
        background-color: #f6f6f6;
    }
</style>