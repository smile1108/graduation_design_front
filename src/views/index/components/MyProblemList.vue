<template>
    <div id="problemList">
        <MyProblemItem v-for="questionObj in questions" :key="questionObj.id" :questionObj="questionObj"></MyProblemItem>
        <Page :pageMax="questionSumPage" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyProblemItem from './MyProblemItem'
    import Page from './pageComponent'

    export default {
        name: "MyProblemList",
        props: {
            questions: Array,
            questionSumPage: Number
        },
        components: {
            MyProblemItem, Page
        },
        methods: {
            changePage(page) {
                this.$emit('changePage', page)
            }
        }
    }
</script>

<style>
    #problemList {
        float: left;
        margin-top: 15px;
        padding: 10px;
        box-sizing: border-box;
        width: 900px;
        height: 95%;
        border-radius: 3px;
        background-color: #fff;
    }
</style>