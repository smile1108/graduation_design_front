<template>
    <div id="myFollow">
        <MyFollowItem v-for="followUserObj in myFollowList" :key="followUserObj.username" :followUserObj="followUserObj"></MyFollowItem>
        <Page :pageMax="pageMax" @changePage="changePage"></Page>
    </div>
</template>

<script>

    import MyFollowItem from './MyFollowItem'
    import Page from '../../index/components/pageComponent'

    export default {
        name: "MyFollow",
        components: {
            MyFollowItem, Page
        },
        data() {
            return {
                myFollowList: [{username: '201801001113', nickname: '一只小菜鸡', profile: 'http://localhost/images/ek9flm7ehlicbjoopodq.jpg',
                school: '山西大学', gender: 'male', college: '计算机与信息技术学院', specialty: '计算机科学与技术', followSum: 10, articleSum: 6}],
                pageMax: undefined
            }
        }
    }
</script>

<style>
    #myFollow {
        width: 70%;
        margin: 10px auto 0;
        background-color: #fff;
        margin-top: 0;
        padding: 30px 50px;
        box-sizing: border-box;
    }
</style>